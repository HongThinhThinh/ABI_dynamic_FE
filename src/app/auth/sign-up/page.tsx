import { SignInForm } from "@/components/layout/signinForm";
import { SignupForm } from "@/components/layout/signupForm";
import { Tabs } from "@/components/ui/tabs";
import React from "react";

function SignUp() {
  const tabs = [
    {
      title: "Sign Up",
      value: "Sign Up",
      content: (
        <div>
          <SignupForm />
        </div>
      ),
    },
    {
      title: "Login",
      value: "Login",
      content: (
        <div>
          <SignInForm />
        </div>
      ),
    },
  ];

  return (
    <div className="animate__animated animate__zoomInRight h-lvh flex justify-center items-center overflow-hidden">
      {/* <Tabs tabs={tabs} /> */}
      <SignupForm />
    </div>
  );
}

export default SignUp;
