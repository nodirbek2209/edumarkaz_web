export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Delete Your Account</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're sorry to see you go. Please read the following information carefully before proceeding with account
                            deletion.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        {/* Warning Section */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Important Warning</h3>
                                    <p className="text-red-700">
                                        Account deletion is permanent and cannot be undone. All your data will be permanently removed from
                                        our systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Data Types Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data That Will Be Deleted</h2>
                            <p className="text-gray-600 mb-4">
                                When you delete your account, the following data types will be permanently removed:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Profile data and settings</li>
                                        <li>• Contact information</li>
                                        <li>• Account preferences</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Learning Data</h3>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Course progress and history</li>
                                        <li>• Saved courses and favorites</li>
                                        <li>• Learning achievements</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Location Data</h3>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Saved locations</li>
                                        <li>• Location preferences</li>
                                        <li>• Geographic search history</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-2">Media Files</h3>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Profile images</li>
                                        <li>• Uploaded documents</li>
                                        <li>• Cached media files</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Requirements Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Ownership Verification Required</h2>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <p className="text-gray-700 mb-4">
                                    To protect your account security, you must prove ownership before we can process your deletion
                                    request.
                                </p>
                                <h3 className="font-semibold text-gray-900 mb-3">Required Evidence:</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>• Access to the email address associated with your account</li>
                                    <li>• Ability to log in to your account</li>
                                    <li>• Verification of recent account activity</li>
                                    <li>• Answer to security questions (if applicable)</li>
                                </ul>
                                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                                    <p className="text-yellow-800 font-medium">
                                        ❌ If you cannot prove account ownership, your deletion request will be denied for security reasons.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deletion Timeline</h2>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-900">Processing Time: Up to 7 Days</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Account deletion is not immediate. The complete removal of all your data may take up to one week to
                                    process across all our systems and backups.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        <span className="text-gray-700">Day 1: Request received and verification initiated</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        <span className="text-gray-700">Days 2-3: Primary data removal from active systems</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        <span className="text-gray-700">Days 4-7: Backup and cache cleanup completion</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Notification Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Notifications</h2>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <div className="flex items-start">
                                    <svg
                                        className="h-6 w-6 text-green-600 mt-1 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-2">You will receive email updates about:</h3>
                                        <ul className="text-green-700 space-y-1">
                                            <li>• Confirmation of deletion request receipt</li>
                                            <li>• Verification status updates</li>
                                            <li>• Deletion process progress</li>
                                            <li>• Final confirmation when deletion is complete</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request Account Deletion</h2>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                                <div className="flex items-start">
                                    <svg
                                        className="h-6 w-6 text-orange-500 mt-1 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-orange-800 mb-2">⚠️ No Automated Deletion Process</h3>
                                        <p className="text-orange-700">
                                            <strong>There is no automatic account deletion feature.</strong> You must contact our development
                                            team directly via email or Telegram to request account deletion.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-6 text-lg font-medium">
                                    📞 <strong>Contact our team directly using one of these methods:</strong>
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-white p-4 rounded-lg border">
                                        <h3 className="font-semibold text-gray-900 mb-3">📱 Mobile Developer</h3>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Rejabaliyev Nodirbek</strong>
                                        </p>
                                        <div className="space-y-2">
                                            <p className="text-blue-600">📞 Phone: +998901625719</p>
                                            <p className="text-blue-600">
                                                💬 Telegram:{" "}
                                                <span className="bg-blue-100 px-2 py-1 rounded font-mono">@RejabaliyevNodirbek2005</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border">
                                        <h3 className="font-semibold text-gray-900 mb-3">⚙️ Backend Specialist</h3>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Ximmatillo Musayev</strong>
                                        </p>
                                        <div className="space-y-2">
                                            <p className="text-blue-600">📞 Phone: +99897 089 3436</p>
                                            <p className="text-blue-600">
                                                💬 Telegram: <span className="bg-blue-100 px-2 py-1 rounded font-mono">@Ximmatilloxon</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg border">
                                    <h3 className="font-semibold text-gray-900 mb-2">📧 Email Support</h3>
                                    <p className="text-gray-700">
                                        Send your deletion request to:{" "}
                                        <a href="mailto:info@edumarkaz.software" className="text-blue-600 hover:underline font-semibold">
                                            info@edumarkaz.software
                                        </a>
                                    </p>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 mb-2">📝 What to Include in Your Request:</h4>
                                    <ul className="text-blue-800 space-y-1">
                                        <li>• Your account email address</li>
                                        <li>• Reason for deletion (optional)</li>
                                        <li>• Confirmation that you understand the process</li>
                                        <li>• Any account verification details requested</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
                        {/*    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">*/}
                        {/*        Proceed with Account Deletion*/}
                        {/*    </button>*/}
                        {/*    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">*/}
                        {/*        Cancel and Keep Account*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>

                    {/* Back to Home */}
                    <div className="text-center">
                        <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                            ← Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
