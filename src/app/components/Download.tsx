import { Download as DownloadIcon, Github, Smartphone, Shield } from "lucide-react";
import { Button } from "./ui/button";

export function Download() {



const downloadExtensionZip = async () => {
  try {
    

    const response = await fetch(
      "https://servitium.onrender.com/api/servyshare/download/extension/"
    );

    if (!response.ok) throw new Error("Download failed");

    const blob = await response.blob();

    const url = URL.createObjectURL(
      new Blob([blob], { type: "application/zip" })
    );

    const a = document.createElement("a");
    a.href = url;
    a.download = "ServyShare.apk";
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
   
  } catch (err) {
    console.error(err);
    alert("Failed to download extension");
  } finally {
 
  }
};



  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Download ServyShare
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started with your 14-day free trial today
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1">Android App</h3>
                    <p className="text-sm text-muted-foreground">Latest version available</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Github className="h-4 w-4" />
                    <span>Hosted on GitHub</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DownloadIcon className="h-4 w-4" />
                    <span>Free 14-day trial included</span>
                  </div>
                </div>

                <Button 
                  onClick={()=>downloadExtensionZip() }
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  download
                >
                  <DownloadIcon className="h-5 w-5" />
                  Download APK
                </Button>

                <p className="text-xs text-muted-foreground">
                  By downloading, you agree to our terms of service and privacy policy
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h4 className="font-medium">Installation Steps:</h4>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">1.</span>
                    <span>Download the APK file to your Android device</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">2.</span>
                    <span>Enable "Install from Unknown Sources" in your device settings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">3.</span>
                    <span>Open the downloaded APK file and tap "Install"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-medium text-foreground">4.</span>
                    <span>Launch ServyShare and start your free trial</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="font-medium text-blue-900 dark:text-blue-100">
                  Security & Privacy Notice
                </h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• We DO NOT interfere with M-Pesa payments or cash movement</li>
                  <li>• Only M-Pesa till messages are read, not private transactions</li>
                  <li>• Messages auto-delete based on your settings (default 24 hours)</li>
                  <li>• Your data is never shared with third parties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
