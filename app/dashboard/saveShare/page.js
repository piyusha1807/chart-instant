import React from "react";
import Link from "next/link";
import { Button, TextButton } from "@/components/Button";

const SaveShare = () => {
  return <div>
  <div className="w-full mt-3 bg-white">
    Save and Share
  </div>
  <div className="mt-6 flex items-center justify-end gap-x-3">
    <Link href="/dashboard/designChart">
      <TextButton>Back</TextButton>
    </Link>
    {/* <Link href="/dashboard">
      <Button>Next</Button>
    </Link> */}
  </div>
</div>;
};

export default SaveShare;
