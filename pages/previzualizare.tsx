import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const PreviewPage = () => {
  const router = useRouter();
  const {
    titluInvitatie,
    limbaInvitatie,
    emailConfirmare,
    emailSecundarConfirmare,
    prenumeMireasa,
    numeMireasa,
    descriereMireasa,
    pozaMireasa,
    prenumeMire,
    numeMire,
    descriereMire,
    pozaMire,
    etichetaParinti,
    numeParinti,
    etichetaNasi,
    numeNasi,
    locatieCununieCivila,
    locatieCununieReligioasa,
    denumireLocalPetrecere,
    adresaPetrecere,
    orasTaraPetrecere,
    dataOraPetrecere
  } = router.query;

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!dataOraPetrecere) return;

    const countDownDate = new Date(dataOraPetrecere).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("Expired");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dataOraPetrecere]);

  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Previzualizare invitație
        </h1>
        <p className="text-center">Titlu invitație: {titluInvitatie || "N/A"}</p>
        <p className="text-center">Limba invitație: {limbaInvitatie || "N/A"}</p>
        {/* Restul câmpurilor de afișare */}
        <p className="text-center">Data și ora petrecere: {dataOraPetrecere || "N/A"}</p>
        <p className="text-center">Timp rămas: {timeLeft}</p>
        <div className="mt-4">
          <Link className="text-blue-600 hover:underline" href="/formularinvitedigital">
            Înapoi la formular
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
