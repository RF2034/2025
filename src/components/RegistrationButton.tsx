import { EVENT_INFO } from "@/constants/eventInfo";

interface RegistrationButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function RegistrationButton({ size = "md", className = "" }: RegistrationButtonProps) {
  const sizeClass = size === "xl" ? "btn btn-xl" :
                   size === "lg" ? "btn btn-lg" : 
                   size === "sm" ? "btn-sm md:btn-md" : 
                   "btn-md";

  return (
    <a 
      href={EVENT_INFO.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary font-semibold transition-colors duration-300 hover:bg-primary/90 ${sizeClass} ${className}`}
    >
      参加登録{size === "sm" ? "" : "はこちら"}
    </a>
  );
}
