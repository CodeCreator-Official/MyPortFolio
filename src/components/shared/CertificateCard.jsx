/* eslint-disable react/prop-types */

function CertificateCard({ link, name }) {
    return (
        <div className="border border-gray-300 p-2 w-full max-w-xl bg-gray-50">
            <img src={link} alt={name || 'certificate'} />
        </div>
    )
}

export default CertificateCard