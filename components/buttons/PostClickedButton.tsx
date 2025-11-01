import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export function PostClickedButton({ 
  className,
  ...props 
}: React.ComponentProps<typeof Button>) {
  return (
    <Button 
      size="sm" 
      variant="outline" 
      className={cn("flex items-center", className)}
      disabled
      {...props}
    >
      <Spinner className="mr-2 h-4 w-4" />
      Submit
    </Button>
  );
}
