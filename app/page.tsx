"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';
import DocSection from '@/components/DocSection';
import DocCard from '@/components/DocCard';
import DocNote from '@/components/DocNote';
import FeatureList from '@/components/FeatureList';

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar />
      
      <main className={cn("main-content", isSidebarCollapsed && "collapsed")}>
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-gray-900">Documentation</h1>
          <p className="mt-4 text-lg text-gray-600">Technical documentation and guides for the Get Me Therapy platform</p>
        </div>

        <div className="mb-12">
          <DocCard title="Quick Navigation" className="mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Environment</th>
                    <th className="py-2 px-4 text-left">Dev</th>
                    <th className="py-2 px-4 text-left">PreProd</th>
                    <th className="py-2 px-4 text-left">Production</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">App/Client Side</td>
                    <td className="py-2 px-4"><a href="https://codetest.getmetherapy.com/" className="text-blue-600 hover:underline">codetest.getmetherapy.com</a></td>
                    <td className="py-2 px-4"><a href="mpreprod.getmetherapy.com" className="text-blue-600 hover:underline">mpreprod.getmetherapy.com</a></td>
                    <td className="py-2 px-4"><a href="https://m.getmetherapy.com/phone-login" className="text-blue-600 hover:underline">m.getmetherapy.com/phone-login</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Therapist portal</td>
                    <td className="py-2 px-4"><a href="https://testing.getmetherapy.com/logincredentials" className="text-blue-600 hover:underline">testing.getmetherapy.com/logincredentials</a></td>
                    <td className="py-2 px-4"><a href="https://tpreprod.getmetherapy.com/logincredentials" className="text-blue-600 hover:underline">tpreprod.getmetherapy.com/logincredentials</a></td>
                    <td className="py-2 px-4"><a href="https://therapist.getmetherapy.com/logincredentials" className="text-blue-600 hover:underline">therapist.getmetherapy.com/logincredentials</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Admin</td>
                    <td className="py-2 px-4"><a href="devadmin.getmetherapy.com" className="text-blue-600 hover:underline">devadmin.getmetherapy.com</a></td>
                    <td className="py-2 px-4"><a href="https://preprodadmin.getmetherapy.com/" className="text-blue-600 hover:underline">preprodadmin.getmetherapy.com</a></td>
                    <td className="py-2 px-4"><a href="admin.getmetherapy.com" className="text-blue-600 hover:underline">admin.getmetherapy.com</a></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">HomePage</td>
                    <td className="py-2 px-4"><a href="https://homepage.getmetherapy.com/" className="text-blue-600 hover:underline">homepage.getmetherapy.com</a></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"><a href="https://getmetherapy.com/" className="text-blue-600 hover:underline">getmetherapy.com</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DocCard>
        </div>

        <section id="client" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Client Side (Webapp)</h2>
          
          <div className="space-y-8">
            <DocCard title="Authentication" className="mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Login with Email</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User navigates to the Login page</li>
                        <li>Selects the "Login with Email" option</li>
                        <li>Enters registered email and password</li>
                        <li>On successful authentication, redirected to dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Email format is validated</li>
                        <li>Password field must not be empty</li>
                        <li>Invalid credentials display: "Incorrect email or password"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Login with Phone</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User enters phone number</li>
                        <li>OTP is sent via SMS</li>
                        <li>User enters OTP</li>
                        <li>On success, redirected to dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Valid phone number format required</li>
                        <li>OTP timeout and retry mechanism applied</li>
                        <li>OTP length (6 digits) is validated</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Login with Google</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User clicks "Login with Google"</li>
                        <li>Google auth window opens</li>
                        <li>Upon success, redirected to dashboard</li>
                        <li>If user doesn't exist, profile is created</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Google token validity checked</li>
                        <li>Duplicate accounts prevented by matching email</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DocCard>

            <DocCard title="Sign Up" className="mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Sign Up with Email</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User enters email, name, and phone number</li>
                        <li>OTP is sent to email for verification</li>
                        <li>Once email is verified, OTP sent to phone</li>
                        <li>After both verifications, account is created</li>
                        <li>Redirect to onboarding or dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Email and phone must be unique</li>
                        <li>OTP expiry (e.g., 5 mins)</li>
                        <li>Field-level checks for name, email format, etc.</li>
                      </ul>
                    </div>
                    <DocNote type="info" title="Notifications">
                      Email notification sent with verification code and welcome message
                    </DocNote>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Sign Up with Google</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Click "Continue with Google"</li>
                        <li>Google login popup opens</li>
                        <li>On success, phone OTP is triggered</li>
                        <li>On OTP verification, account is created</li>
                      </ul>
                    </div>
                    <DocNote type="info" title="Notifications">
                      Welcome email sent to user
                    </DocNote>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Already Registered Number</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User tries to register with existing number</li>
                        <li>Popup appears: "You're already registered. Please log in."</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Number checked against existing database before sign-up</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DocCard>

            <DocCard title="Onboarding Process" className="mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 1: Therapy Reason Selection</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>After successful sign-up, user selects reason(s) for therapy</li>
                        <li>Multiple choices can be selected</li>
                        <li>"Continue" button disabled until at least one option chosen</li>
                        <li>Selections stored and user proceeds to next step</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>At least one reason must be selected to move forward</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 2: Basic Demographics Input</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User selects key demographic details</li>
                        <li>Single-choice inputs for each field</li>
                        <li>"Continue" button activates after valid input</li>
                        <li>Data saved for experience personalization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Each question must be answered</li>
                        <li>Field-level validation ensures no blank fields</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 3: Therapist Preference Selection</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User indicates therapist preferences (gender, language)</li>
                        <li>Preferences are optional but saved if selected</li>
                        <li>User proceeds with "Continue" button</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Optional selections, but must be valid system-defined options if chosen</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 4: Availability Selection</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>User selects preferred days and time slots</li>
                        <li>Visual selector interface for availability marking</li>
                        <li>Data used for matching with therapist schedules</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>At least one day and time preference required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Step 5: Summary & Confirmation</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Flow</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Summary of all onboarding responses shown</li>
                        <li>User can confirm or edit selections</li>
                        <li>Final confirmation submits data</li>
                        <li>Redirect to main dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Validation</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>All required data must be present</li>
                        <li>Incomplete steps must be fixed before proceeding</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DocCard>

            <DocCard title="Mobile App User Flows" className="mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">After Onboarding Assessment</h4>
                  <div className="space-y-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Application personalizes experience based on assessment responses</li>
                        <li>Loading screen displays "Hang on! Personalizing your experience..."</li>
                        <li>User automatically navigated to Dashboard after personalization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Dashboard / Home Screen</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Your Top Match</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Therapist's profile picture and details</li>
                        <li>"Book" button for direct access to plan selection</li>
                        <li>"View Profile" button for detailed therapist information</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Key Sections</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Select Your Therapist section with "Book" button</li>
                        <li>Swipeable testimonials from other users</li>
                        <li>Bottom navigation: Home, Plans, Resources, Account</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Therapists List</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Top Match Display</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Profile picture and professional details</li>
                        <li>"Details" button for full profile access</li>
                        <li>"Book Now" button for immediate booking</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Other Therapists</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Sorted by compatibility</li>
                        <li>Each listing includes profile picture and brief description</li>
                        <li>Options to filter and sort the list</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Choose a Plan to Book Sessions</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Plan Selection</h5>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Multiple therapy plans with features and benefits</li>
                        <li>"Know More" button for detailed plan information</li>
                        <li>Select/Continue button to proceed with booking</li>
                      </ul>
                    </div>
                    <DocNote type="info" title="Navigation">
                      Close (X) button available to return to previous screen
                    </DocNote>
                  </div>
                </div>
              </div>
            </DocCard>
          </div>
        </section>

        <section id="therapist" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Therapist Side</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Core Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Client management and session history</li>
                <li>Calendar and availability management</li>
                <li>Secure session notes and documentation</li>
                <li>Payment tracking and financial reports</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="admin" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admin Side</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Administrative Tools</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive user management system</li>
                <li>Therapist verification and credential management</li>
                <li>Platform analytics and performance metrics</li>
                <li>Content management and resource library</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="core" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Core Functionality</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Client Flow</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Homepage visit and service review</li>
                <li>Trial session purchase</li>
                <li>Account creation and onboarding</li>
                <li>Initial session scheduling</li>
                <li>Post-session communication</li>
              </ol>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Technical Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>HIPAA-compliant data storage and transmission</li>
                <li>Responsive design across all devices</li>
                <li>WCAG 2.1 AA accessibility compliance</li>
                <li>Optimized performance and load times</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}