
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="mb-6 md:mb-0">
                        <Image src="/images/logo-with-text.png" alt="EduMarkaz Logo" width={200} height={60} className="h-auto" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#about" className="text-gray-600 hover:text-[#1E4DB7]">
                            {t("footer.about")}
                        </a>
                        <a href="#features" className="text-gray-600 hover:text-[#1E4DB7]">
                            {t("footer.features")}
                        </a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-[#1E4DB7]">
                            {t("footer.howItWorks")}
                        </a>
                        <a href="/privacy_and_policy" className="text-gray-600 hover:text-[#1E4DB7]">
                            {t("footer.privacy")}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#1E4DB7]">
                            {t("footer.terms")}
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 text-center text-gray-500">
                    <p>
                        © {new Date().getFullYear()} EduMarkaz. {t("footer.rights")}
                    </p>
                    <p className="mt-2 text-sm">{t("footer.contact.text")} n.rejabaliyev@newuu.uz | x.musayev@newuu.uz</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
