import { EVENT_INFO } from "@/constants/eventInfo";

interface RegistrationButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function RegistrationButton({ size = "md", className = "" }: RegistrationButtonProps) {
  const sizeClass = size === "lg" ? "px-6 py-3 text-lg md:text-xl" : 
                   size === "sm" ? "btn-sm md:btn-md" : 
                   "btn-md";

  return (
    <a 
      href={EVENT_INFO.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary shadow-lg font-semibold transition-colors duration-300 hover:bg-primary/90 ${sizeClass} ${className}`}
    >
      参加登録{size === "sm" ? "" : "はこちら"}
    </a>
  );
}
