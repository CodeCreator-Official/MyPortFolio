/* eslint-disable react/prop-types */

function CertificateCard({ link, name }) {
    return (
        <div className="border border-gray-300 p-2 bg-gray-50">
            <img src={link} alt={name || 'certificate'} />
        </div>
    )
}

export default CertificateCard