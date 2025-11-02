import { Button } from "@/components/ui/button";

export function PreClickedButton({ 
  onClick, 
  className,
  ...props 
}: React.ComponentProps<typeof Button>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('PreClickedButton: handling click event');
    onClick?.(e);
  };

  return (
    <Button 
      type="button"
      size="sm" 
      variant="outline" 
      className={className}
      onClick={handleClick}
      {...props}
    >
      Submit
    </Button>
  );
}
