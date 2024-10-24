import { SignIn } from "@clerk/clerk-react";
export default function SignInPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        padding: "1rem",
      }}
    >
      <SignIn />
    </div>
  );
}
