import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function DownloadCVButton() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        const pdfUrl = "https://drive.google.com/uc?export=download&id=1g4MltH3m2Rz0n7yKhqBL41m5wGQb2vqm";

        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();

            // Create temporary blob URL
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Ihieri_Chibuike_Resume.pdf';

            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Failed to download CV:', error);
            // Fallback: Open in new tab if programmatic fetch is blocked
            window.open(`https://drive.google.com/file/d/1g4MltH3m2Rz0n7yKhqBL41m5wGQb2vqm/view`, '_blank');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <button value="Download CV"
            onClick={handleDownload}
            disabled={isDownloading}
            className="rounded-lg bg-black px-4 py-2 border border-purple-400 hover:bg-linear-to-br hover:from-purple-700 hover:to-gray-900"
        >
            <a className="flex items-center gap-2">
                {isDownloading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Downloading...
                    </>
                ) : (
                    <>
                        <Download className="h-5 w-5" />
                        Download CV
                    </>
                )}
            </a>
        </button>
    );
}