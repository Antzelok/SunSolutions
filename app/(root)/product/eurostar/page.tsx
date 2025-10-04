import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function EurostarPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">

        {/* LEFT SIDE - Product Image */}
        <div className="flex justify-center items-start">
          <Image
            src="/images/eurostar/eurostarMod.png"
            alt="Eurostar Solar Heater"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-contain"
            priority
          />
        </div>

        {/* RIGHT SIDE - Product Info */}
        <div className="space-y-10">
          {/* Header */}
          <Card className="shadow-none">
            <CardContent className="p-6">
              <h1 className="text-orange-400 font-semibold text-xl mb-4">
                Ηλιακοί Θερμοσίφωνες Κανονικού Ύψους
              </h1>
              <ul className="text-black space-y-4 list-disc list-inside">
                <li>
                  Ο ηλιακός θερμοσίφωνας EUROSTAR έχει σχεδιαστεί και κατασκευαστεί
                  με στόχο να εξασφαλίζει μεγάλη απόδοση και διάρκεια ζωής.
                </li>
                <li>
                  Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου με τον υψηλότερο
                  βαθμό απόδοσης, παρέχει συνέχεια καυτό νερό ακόμα και στις
                  δυσκολότερες συνθήκες.
                </li>
                <li>
                  Οι ηλιακοί θερμοσίφωνες EUROSTAR κατασκευάζονται σύμφωνα με το
                  διεθνές πρότυπο ποιότητας ISO 9001-2015.
                </li>
                <li>
                  Ο συλλέκτης πιστοποιείται κατά ΕΝ 12975-1-2 για απόδοση και
                  αξιοπιστία.
                </li>
                <li>
                  Ο ηλιακός θερμοσίφωνας EUROSTAR έχει διακριθεί με το Ευρωπαϊκό
                  σήμα ποιότητας Solar Keymark.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-orange-400 font-semibold text-lg mb-4">Πλεονεκτήματα</h2>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  Εύκολη εγκατάσταση χωρίς τρυπήματα, ιδανική για κεραμίδια.
                </li>
                <li>
                  Ρυθμιζόμενη κλίση (18°–22°–35°–40°) για μέγιστη απόδοση.
                </li>
                <li>Συνδέεται και με καλοριφέρ.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Boiler Specs */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-orange-400 font-semibold text-lg mb-4">
                Τεχνικά Χαρακτηριστικά Boiler
              </h2>
              <ol className="list-decimal list-inside text-black space-y-3">
                <li>Χάλκινος υδροσκελετός υψηλής απόδοσης.</li>
                <li>Μόνωση πετροβάμβακα 40mm για ελάχιστες απώλειες.</li>
                <li>Πρισματικό άθραυστο κρύσταλλο securit πάχους 4mm.</li>
                <li>Ελαστικά EPDM και σιλικόνη για αντοχή έως 160°C.</li>
                <li>
                  Θερμικό υγρό προπυλενογλυκόλης με προστασία κατά παγετού.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Collector Specs */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-orange-400 font-semibold text-lg mb-4">
                Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
              </h2>
              <ol className="list-decimal list-inside text-black space-y-3">
                <li>
                  Πλαίσιο αλουμινίου βαμμένο ηλεκτροστατικά χωρίς ραφές.
                </li>
                <li>
                  Επιλεκτικός χάλκινος υδροσκελετός με φύλλα αλουμινίου υψηλής
                  απόδοσης.
                </li>
                <li>
                  Μόνωση 40mm πετροβάμβακα για περιορισμό θερμικών απωλειών.
                </li>
                <li>
                  Κρύσταλλο securit 4mm με 90,5% διαπερατότητα.
                </li>
                <li>
                  Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά πρόσθετα.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}