import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "@/components/Layout";

const FormularInvitatieDigitala = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    titluInvitatie: "",
    limbaInvitatie: "romana",
    emailConfirmare: "",
    emailSecundarConfirmare: "",
    prenumeMireasa: "",
    numeMireasa: "",
    descriereMireasa: "",
    pozaMireasa: null,
    prenumeMire: "",
    numeMire: "",
    descriereMire: "",
    pozaMire: null,
    etichetaParinti: "",
    numeParinti: "",
    etichetaNasi: "",
    numeNasi: "",
    locatieCununieCivila: "",
    locatieCununieReligioasa: "",
    denumireLocalPetrecere: "",
    adresaPetrecere: "",
    orasTaraPetrecere: "",
    dataOraPetrecere: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: imageFile,
      }));
    }
  };

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleNextStep = () => {
    setActiveTab(activeTab + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aici poți adăuga logica pentru trimiterea datelor către server sau pentru a face altceva cu datele formularului
    console.log(formData);
  };

  const handlePreview = () => {
    // Trimite datele către pagina de previzualizare
    router.push({
      pathname: "/previzualizare",
      query: formData,
    });
  };

  return (
    <Layout>
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md p-8">
        {activeTab === 1 && (
          <div>
            <h1>Informații generale</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="titluInvitatie">Titlu invitație:</label>
                <input
                  type="text"
                  id="titluInvitatie"
                  name="titluInvitatie"
                  value={formData.titluInvitatie}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="limbaInvitatie">Limba invitație:</label>
                <select
                  id="limbaInvitatie"
                  name="limbaInvitatie"
                  value={formData.limbaInvitatie}
                  onChange={handleChange}
                >
                  <option value="romana">Romana</option>
                  <option value="engleza">Engleza</option>
                </select>
              </div>
              <div>
                <label htmlFor="emailConfirmare">Email confirmare:</label>
                <input
                  type="email"
                  id="emailConfirmare"
                  name="emailConfirmare"
                  value={formData.emailConfirmare}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="emailSecundarConfirmare">Email secundar de confirmare:</label>
                <input
                  type="email"
                  id="emailSecundarConfirmare"
                  name="emailSecundarConfirmare"
                  value={formData.emailSecundarConfirmare}
                  onChange={handleChange}
                />
              </div>
              {/* Adăugarea câmpurilor noi */}
              <div>
                <label htmlFor="prenumeMireasa">Prenumele miresei:</label>
                <input
                  type="text"
                  id="prenumeMireasa"
                  name="prenumeMireasa"
                  value={formData.prenumeMireasa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="numeMireasa">Numele miresei:</label>
                <input
                  type="text"
                  id="numeMireasa"
                  name="numeMireasa"
                  value={formData.numeMireasa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="descriereMireasa">Câteva cuvinte despre mireasă:</label>
                <textarea
                  id="descriereMireasa"
                  name="descriereMireasa"
                  value={formData.descriereMireasa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pozaMireasa">Poză mireasă:</label>
                <input
                  type="file"
                  id="pozaMireasa"
                  name="pozaMireasa"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <label htmlFor="prenumeMire">Prenumele mirelui:</label>
                <input
                  type="text"
                  id="prenumeMire"
                  name="prenumeMire"
                  value={formData.prenumeMire}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="numeMire">Numele mirelui:</label>
                <input
                  type="text"
                  id="numeMire"
                  name="numeMire"
                  value={formData.numeMire}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="descriereMire">Câteva cuvinte despre mire:</label>
                <textarea
                  id="descriereMire"
                  name="descriereMire"
                  value={formData.descriereMire}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pozaMire">Poză mire:</label>
                <input
                  type="file"
                  id="pozaMire"
                  name="pozaMire"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {/* Restul câmpurilor pot fi adăugate similar */}
              <button type="submit">Trimite</button>
            </form>
          </div>
        )}
        <div className="flex justify-center space-x-4 mt-4">
          <button onClick={handlePreview}>Previzualizare invitație</button>
          <button onClick={handleNextStep}>Pasul următor</button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FormularInvitatieDigitala;
