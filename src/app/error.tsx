"use client"
import { ErrorComponent } from "@/components/organisms/Error/Error";
import { APP_FEEDBACK } from "@/types";


const Error = () => <ErrorComponent title="Page crashed" description={APP_FEEDBACK.default.error} />;

export default Error;