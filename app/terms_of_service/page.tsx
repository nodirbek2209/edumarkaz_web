import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service - EduMarkaz",
    description: "Terms of Service for EduMarkaz educational platform",
}

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-lg text-gray-600">Last updated: December 2024</p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            These Terms of Service ("Terms") govern your use of EduMarkaz mobile application and related services. By
                            accessing or using EduMarkaz, you agree to be bound by these Terms. If you do not agree, do not use our
                            services.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>You must be at least 13 years old to use EduMarkaz.</li>
                            <li>Users under 13 may only use the app with parental consent.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Account Registration</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>You must register using a valid phone number to receive a verification code.</li>
                            <li>You may add optional details to your profile (name, location, email, Instagram, etc.).</li>
                            <li>
                                You are responsible for maintaining the confidentiality of your account and for all activities under it.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Services</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>
                                EduMarkaz is a platform where education centers and teachers can post courses, and students/parents can
                                find them.
                            </li>
                            <li>
                                You agree to use the service only for lawful purposes and not to post any harmful, misleading, or
                                illegal content.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content and Responsibility</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>You are responsible for all information you provide and content you post.</li>
                            <li>We reserve the right to remove any content that violates these Terms or applicable laws.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Location Services</h2>
                        <p className="text-gray-700">
                            If you choose to share your location, it will be displayed on the map and may be used with Google Maps for
                            navigation.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payments and Transactions</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>If applicable, all transactions are subject to the payment terms shown in the app.</li>
                            <li>EduMarkaz is not responsible for disputes between buyers and education centers.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                        <p className="text-gray-700">
                            We may suspend or terminate your account if you violate these Terms or engage in harmful behavior.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>EduMarkaz is provided "as is" without warranties of any kind.</li>
                            <li>We do not guarantee continuous or error-free operation.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-700">
                            To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential
                            damages arising from your use of the service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700 mb-2">For questions about these Terms, contact us at:</p>
                            <p className="text-blue-600 font-medium">📧 support@edumarkaz.software</p>
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    )
}
