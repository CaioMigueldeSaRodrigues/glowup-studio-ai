import { useState, useCallback } from "react";
import { Upload, X, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

interface UploadAreaProps {
  onImagesChange: (images: File[]) => void;
  email: string;
  onEmailChange: (value: string) => void;
}

export const UploadArea = ({ onImagesChange, email, onEmailChange }: UploadAreaProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const validateAndAddImages = useCallback((files: FileList | null) => {
    if (!files) return;

    const validImages: File[] = [];
    const validPreviews: string[] = [];
    const errors: string[] = [];

    Array.from(files).forEach((file) => {
      // Check file type
      if (!file.type.match(/^image\/(jpeg|png|heic)$/)) {
        errors.push(`${file.name}: Formato inválido. Use JPEG, PNG ou HEIC.`);
        return;
      }

      // Check file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        errors.push(`${file.name}: Arquivo muito grande. Máximo 5MB.`);
        return;
      }

      // Check total count
      if (images.length + validImages.length >= 2) {
        errors.push("Máximo de 2 fotos permitido.");
        return;
      }

      validImages.push(file);
      validPreviews.push(URL.createObjectURL(file));
    });

    if (errors.length > 0) {
      toast({
        title: "Erro no upload",
        description: errors[0],
        variant: "destructive",
      });
    }

    if (validImages.length > 0) {
      const newImages = [...images, ...validImages].slice(0, 2);
      const newPreviews = [...previews, ...validPreviews].slice(0, 2);
      setImages(newImages);
      setPreviews(newPreviews);
      onImagesChange(newImages);
    }
  }, [images, previews, onImagesChange, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    validateAndAddImages(e.dataTransfer.files);
  }, [validateAndAddImages]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndAddImages(e.target.files);
  }, [validateAndAddImages]);

  const removeImage = useCallback((index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    URL.revokeObjectURL(previews[index]);
    setImages(newImages);
    setPreviews(newPreviews);
    onImagesChange(newImages);
  }, [images, previews, onImagesChange]);

  return (
    <div className="w-full space-y-4">
      {/* Upload Zone */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
          isDragging
            ? "border-primary bg-primary/10 glow-border"
            : "border-border hover:border-primary/50"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/heic"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={images.length >= 2}
        />

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">
              {images.length >= 2 ? "Máximo de fotos atingido" : "Arraste suas fotos aqui"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              ou clique para selecionar • Máximo 2 fotos • JPEG, PNG, HEIC • Até 5MB cada
            </p>
          </div>
        </div>
      </div>

      {/* Preview Grid */}
      {previews.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full aspect-square object-cover rounded-xl glass"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs">
                Foto {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Alert */}
      {images.length === 0 && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-foreground">Dicas para melhores resultados:</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>• Use fotos com boa iluminação natural</li>
              <li>• Rosto visível e centralizado</li>
              <li>• Fundo simples e limpo</li>
              <li>• Sem óculos escuros ou filtros</li>
            </ul>
          </div>
        </div>
      )}

      {/* Email Input */}
      <div className="mt-6">
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};
