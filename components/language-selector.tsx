"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/translations"

interface LanguageOption {
  code: Language
  name: string
  nativeName: string
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "uz", name: "Uzbek", nativeName: "O'zbekcha" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
]

interface LanguageSelectorProps {
  variant?: "ghost" | "outline"
}

export function LanguageSelector({ variant = "ghost" }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size="sm"
          className={`h-8 gap-1 px-2 ${variant === "ghost" ? "text-white" : "text-gray-700"}`}
        >
          <Globe className="h-4 w-4" />
          <span>{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`${language === lang.code ? "bg-muted" : ""} cursor-pointer`}
          >
            <div className="flex items-center w-full">
              <span className="mr-2">{lang.code.toUpperCase()}</span>
              <span>{lang.nativeName}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
