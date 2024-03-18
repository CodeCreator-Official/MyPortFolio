import { certificates } from "../data/data"
import CertificateCard from "./shared/CertificateCard"

function Certifications() {
    return (
        <div className="container px-5 lg:px-20 xl:px-40 py-10 pt-0 mx-auto">
            <div className="flex items-center gap-3">
                <p className="h-[2px] w-full bg-gray-500"></p>
                <p className="text-nowrap font-bold text-lg text-gray-600">Certifications</p>
                <p className="h-[2px] w-full bg-gray-500"></p>
            </div>

            <div className="text-gray-700 flex gap-5 flex-wrap justify-center w-full max-w-3xl lg:max-w-4xl mx-auto my-10">
                {
                    certificates.map((certificate) => (
                        <CertificateCard key={certificate.id} link={certificate.link} name={certificate.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Certifications