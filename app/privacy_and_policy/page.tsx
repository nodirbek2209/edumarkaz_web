import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Privacy Policy - Edu-markaz",
    description: "Privacy Policy for Edu-markaz educational platform",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/" className="inline-flex items-center text-[#1E4DB7] hover:text-[#1a3f9e] font-medium mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center">
                        <Shield className="h-8 w-8 text-[#1E4DB7] mr-3" />
                        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                    </div>
                    <p className="text-gray-600 mt-2">Last updated: December 8, 2025</p>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <div className="flex items-center mb-4">
                            <FileText className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Edu-markaz ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the
                            security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
                            safeguard your information when you use our educational platform and services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Eye className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Name, email address, and contact information</li>
                                    <li>Educational background and academic interests</li>
                                    <li>Profile information and preferences</li>
                                    <li>Payment information for premium services</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Usage Information</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Course progress and learning analytics</li>
                                    <li>Device information and browser type</li>
                                    <li>IP address and location data</li>
                                    <li>Interaction with our platform and services</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Users className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Provide and improve our educational services</li>
                            <li>Personalize your learning experience</li>
                            <li>Process payments and manage subscriptions</li>
                            <li>Send important updates and notifications</li>
                            <li>Analyze usage patterns to enhance our platform</li>
                            <li>Ensure platform security and prevent fraud</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Lock className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Information Sharing</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information
                            only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>With your explicit consent</li>
                            <li>To comply with legal requirements or court orders</li>
                            <li>To protect our rights, property, or safety</li>
                            <li>With trusted service providers who assist in our operations</li>
                            <li>In connection with a business transfer or merger</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Shield className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction. This includes encryption,
                            secure servers, and regular security assessments. However, no method of transmission over the internet is
                            100% secure.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Users className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Access and review your personal data</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Delete your account and associated data</li>
                            <li>Restrict or object to certain processing activities</li>
                            <li>Data portability for your personal information</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>
                    </section>

                    {/* Cookies and Tracking */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Eye className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Cookies and Tracking</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your experience on our platform. These help us
                            remember your preferences, analyze site traffic, and provide personalized content. You can control cookie
                            settings through your browser preferences.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <div className="flex items-center mb-4">
                            <Shield className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Children's Privacy</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                            information from children under 13. If we become aware that we have collected such information, we will
                            take steps to delete it promptly.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section>
                        <div className="flex items-center mb-4">
                            <FileText className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                            requirements. We will notify you of any material changes by posting the updated policy on our website and
                            updating the "Last updated" date.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <Mail className="h-6 w-6 text-[#1E4DB7] mr-2" />
                            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>Email:</strong> privacy@edumarkaz.software
                            </p>
                            <p>
                                <strong>Website:</strong> www.edumarkaz.software
                            </p>
                            <p>
                                <strong>Address:</strong> Edu-markaz Educational Platform
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
