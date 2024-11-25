import { useState } from "react";
import { SectionContainer } from ".";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Certified() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <SectionContainer
      bg="bg-primary/10"
      id="certified-section"
      title="We are "
      titleColor="Certified Company"
      description="At MHS Tech Ventures, our certifications stand as a testament to our commitment to excellence and industry standards. These achievements reflect our dedication to delivering top-tier services and innovative solutions, ensuring trust and quality for our clients worldwide."
      className=""
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 items-center max-w-3xl mx-auto">
        {[1, 2, 3].map((logo) => (
          <div
            className="w-full aspect-square border p-2 rounded flex items-center justify-center bg-white"
            key={logo}
          >
            <img
              src={`/images/certified/logo${logo}.webp`}
              alt="Certification Logo"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog>
        <div className="text-center pt-8">
          <DialogTrigger className="" asChild>
            <Button size="lg" variant="">
              View Certification
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-lg">
          <DialogHeader className="p-6 bg-gray-50">
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Cirtifide Company Certification
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <img
              src="/images/certified/certificate.webp"
              alt="Certificate Image"
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
}
