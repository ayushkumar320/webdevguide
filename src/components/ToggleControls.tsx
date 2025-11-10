import {useState} from "react";
import {Button} from "./ui/button";
import {Palette, Zap, AlertCircle} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ToggleControlsProps {
  onJSToggle: (enabled: boolean) => void;
}

export const ToggleControls = ({onJSToggle}: ToggleControlsProps) => {
  const [cssEnabled, setCssEnabled] = useState(true);
  const [jsEnabled, setJsEnabled] = useState(true);
  const [showCSSDialog, setShowCSSDialog] = useState(false);
  const [showJSDialog, setShowJSDialog] = useState(false);

  const toggleCSS = () => {
    if (cssEnabled) {
      setShowCSSDialog(true);
    } else {
      // When CSS is disabled, confirm immediately without dialog since dialogs won't be styled
      const confirmed = window.confirm(
        "Enable CSS Styles?\n\nThis will restore all styling to the page."
      );
      if (confirmed) {
        enableCSS();
      }
    }
  };

  const confirmCSSDisable = () => {
    const styleSheets = document.styleSheets;

    for (let i = 0; i < styleSheets.length; i++) {
      try {
        (styleSheets[i] as CSSStyleSheet).disabled = true;
      } catch (e) {
        console.log("Cannot access stylesheet:", e);
      }
    }

    setCssEnabled(false);
    setShowCSSDialog(false);
  };

  const enableCSS = () => {
    const styleSheets = document.styleSheets;

    for (let i = 0; i < styleSheets.length; i++) {
      try {
        (styleSheets[i] as CSSStyleSheet).disabled = false;
      } catch (e) {
        console.log("Cannot access stylesheet:", e);
      }
    }

    setCssEnabled(true);
  };

  const toggleJS = () => {
    if (jsEnabled) {
      setShowJSDialog(true);
    } else {
      // When JS is disabled, show message that page needs to be refreshed
      window.alert(
        "JavaScript is disabled. To enable JavaScript, please refresh the page."
      );
    }
  };

  const confirmJSDisable = () => {
    setJsEnabled(false);
    onJSToggle(false);
    setShowJSDialog(false);
  };

  const enableJS = () => {
    setJsEnabled(true);
    onJSToggle(true);
  };

  return (
    <>
      {/*
        Responsive placement:
        - Mobile: bottom centered compact horizontal bar
        - md and up: original top-right vertical stack
      */}
      <div className="fixed z-50 left-1/2 bottom-4 transform -translate-x-1/2 flex flex-row items-center gap-3 md:top-6 md:right-6 md:left-auto md:bottom-auto md:transform-none md:flex-col md:items-stretch px-3 py-2 bg-card/80 backdrop-blur-sm rounded-full md:bg-transparent md:p-0">
        {/* CSS Toggle */}
        <Button
          onClick={toggleCSS}
          variant={cssEnabled ? "default" : "destructive"}
          size="lg"
          className="gap-2 shadow-glow-lg hover:scale-105 transition-all duration-300 font-semibold flex-1 md:w-auto md:min-w-[180px] text-sm md:text-base"
        >
          <Palette className="w-5 h-5" />
          <span className="truncate">
            {cssEnabled ? "Disable CSS" : "Enable CSS"}
          </span>
        </Button>

        {/* JS Toggle */}
        <Button
          onClick={toggleJS}
          variant={jsEnabled ? "default" : "destructive"}
          size="lg"
          className="gap-2 shadow-glow-lg hover:scale-105 transition-all duration-300 font-semibold flex-1 md:w-auto md:min-w-[180px] text-sm md:text-base"
        >
          <Zap className="w-5 h-5" />
          <span className="truncate">
            {jsEnabled ? "Disable JS" : "Enable JS"}
          </span>
        </Button>

        {/* Helper tooltip */}
        {cssEnabled && jsEnabled && (
          // hide helper on small screens to save space
          <div className="hidden md:block p-3 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <p className="leading-relaxed">
                Click buttons to see how websites work without CSS or
                JavaScript!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CSS Disable Confirmation Dialog */}
      <AlertDialog open={showCSSDialog} onOpenChange={setShowCSSDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Disable CSS Styles?
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3 text-left">
              <p>
                This will remove{" "}
                <span className="font-semibold text-foreground">
                  all styling
                </span>{" "}
                from the page to demonstrate how CSS transforms raw HTML.
              </p>
              <p>You'll see:</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>Unstyled, plain HTML structure</li>
                <li>Default browser fonts and spacing</li>
                <li>No colors, animations, or layouts</li>
              </ul>
              <p className="text-primary font-medium">
                Perfect for showing the importance of CSS!
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCSSDisable}>
              Yes, Disable CSS
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* JS Disable Confirmation Dialog */}
      <AlertDialog open={showJSDialog} onOpenChange={setShowJSDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Disable JavaScript?
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3 text-left">
              <p>
                This will disable{" "}
                <span className="font-semibold text-foreground">
                  all interactive features
                </span>{" "}
                to show how JavaScript brings websites to life.
              </p>
              <p>You'll notice:</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>No animations or scroll effects</li>
                <li>No interactive behaviors</li>
                <li>Static, non-responsive content</li>
              </ul>
              <p className="text-primary font-medium">
                Great for demonstrating JavaScript's power!
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmJSDisable}>
              Yes, Disable JS
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
