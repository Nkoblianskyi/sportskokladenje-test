import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const imageSize = size === "sm" ? 36 : size === "lg" ? 56 : 48

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <div className="relative flex flex-row items-center gap-2 md:gap-3">
        <Image src="/favicon.ico" alt="Logo" width={imageSize} height={imageSize} className="rounded-lg" />
        <div className="flex flex-col leading-tight">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-croatia-gold uppercase break-words max-w-[200px] sm:max-w-none">
            sportskokladenje
          </p>
        </div>
      </div>
    </Link>
  )
}
