import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Eurostar",
};

const EurostarPage = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* LEFT SIDE - Images in Cards */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <Image
                src="/images/card/eurostar.png"
                alt="Eurostar Product"
                width={600}
                height={200}
                className="rounded-2xl object-contain"
                priority
              />
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <Image
                src="/images/eurostar/eurostarMod.png"
                alt="Eurostar Solar Heater"
                width={600}
                height={600}
                className="rounded-2xl object-contain"
                priority
              />
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Product Info */}
        <div className="flex flex-col space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-orange-400 font-semibold text-xl">
              Ηλιακοί Θερμοσίφωνες Κανονικού Ύψους
            </h1>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Ο ηλιακός θερμοσίφωνας EUROSTAR έχει σχεδιαστεί και
                κατασκευαστεί για μεγάλη απόδοση και διάρκεια ζωής.
              </li>
              <li>
                Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου παρέχει συνέχεια
                καυτό νερό ακόμα και σε δύσκολες συνθήκες.
              </li>
              <li>Κατασκευασμένος σύμφωνα με ISO 9001-2015.</li>
              <li>
                Πιστοποιείται κατά ΕΝ 12975-1-2 για απόδοση και αξιοπιστία.
              </li>
              <li>Διαθέτει το Ευρωπαϊκό σήμα ποιότητας Solar Keymark.</li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Πλεονεκτήματα
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Εύκολη εγκατάσταση χωρίς τρυπήματα, ιδανική για κεραμίδια.
              </li>
              <li>Ρυθμιζόμενη κλίση (18°–22°–35°–40°) για μέγιστη απόδοση.</li>
              <li>Συνδέεται και με καλοριφέρ.</li>
            </ul>
          </div>

          {/* Boiler Specs */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Τεχνικά Χαρακτηριστικά Boiler
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Χάλκινος υδροσκελετός υψηλής απόδοσης.</li>
              <li>Μόνωση πετροβάμβακα 40mm για ελάχιστες απώλειες.</li>
              <li>Πρισματικό άθραυστο κρύσταλλο securit πάχους 4mm.</li>
              <li>Ελαστικά EPDM και σιλικόνη για αντοχή έως 160°C.</li>
              <li>Θερμικό υγρό προπυλενογλυκόλης με προστασία κατά παγετού.</li>
            </ul>
          </div>

          {/* Collector Specs */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Πλαίσιο αλουμινίου βαμμένο ηλεκτροστατικά χωρίς ραφές.</li>
              <li>
                Επιλεκτικός χάλκινος υδροσκελετός με φύλλα αλουμινίου υψηλής
                απόδοσης.
              </li>
              <li>
                Μόνωση 40mm πετροβάμβακα για περιορισμό θερμικών απωλειών.
              </li>
              <li>Κρύσταλλο securit 4mm με 90,5% διαπερατότητα.</li>
              <li>
                Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά πρόσθετα.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EurostarPage;
