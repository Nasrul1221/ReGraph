import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function UploadFile({ fun }) {
  return (
    <div className="">
      <Input
        type="file"
        id="files"
        onChange={fun}
        className="border-gray-700 text-secondary-foreground bg-background rounded p-2"
      />
    </div>
  );
}
