import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fino",
};

const FinoScreen = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* LEFT SIDE - Images in Cards */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <Image
                src="/images/fino/finoSolar.png"
                alt="Fino Solar Heater"
                width={500}
                height={300}
                className="rounded-2xl object-contain"
                priority
              />
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-0">
              <Image
                src="/images/fino/finoSolar1.png"
                alt="Fino Product"
                width={500}
                height={300}
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
              Ηλιακοί Θερμοσίφωνες Χαμηλού Ύψους
            </h1>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Ο ηλιακός θερμοσίφωνας EUROSTAR FINO έχει σχεδιαστεί για μεγάλη
                απόδοση, διάρκεια ζωής και διακριτική εμφάνιση.
              </li>
              <li>
                Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου παρέχει συνεχώς
                καυτό νερό ακόμα και σε δύσκολες καιρικές συνθήκες.
              </li>
              <li>
                Κατασκευάζεται σύμφωνα με ISO 9001-2015 και ελέγχεται από
                ISO/DP9459-2.
              </li>
            </ul>
          </div>

          {/* Boiler Technical Specs */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Τεχνικά Χαρακτηριστικά Boiler
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Εξωτερικό περίβλημα από ανοξείδωτο ατσάλι ή χάλυβα
                ηλεκτροστατικής βαφής φούρνου.
              </li>
              <li>
                Μόνωση χυτής οικολογικής πολυουρεθάνης 5–7 cm, πυκνότητας 50
                kg/m³.
              </li>
              <li>
                Μανδύας κλειστού κυκλώματος για μέγιστη επιφάνεια εναλλαγής
                θερμότητας.
              </li>
              <li>
                Boiler από ευρωπαϊκό χαλυβδοέλασμα με προστασία από εμαγιέ.
              </li>
              <li>Ανοδική προστασία με ράβδο μαγνησίου κατά ηλεκτρόλυσης.</li>
              <li>
                Ηλεκτρική αντίσταση 4kW για ζεστό νερό ακόμη και με συννεφιά.
              </li>
              <li>
                Θερμοστάτης ασφαλείας διπλής επαφής για προστασία από
                υπερθέρμανση.
              </li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Πλεονεκτήματα
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Απλή εγκατάσταση σε επίπεδη σκεπή σε ελάχιστο χρόνο.</li>
              <li>Συνδέεται και με Καλοριφέρ (προαιρετικά).</li>
            </ul>
          </div>

          {/* Collector Technical Specs */}
          <div className="space-y-4">
            <h2 className="text-orange-400 font-semibold text-lg">
              Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
            </h2>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                Πλαίσιο από χυτό προφίλ αλουμινίου με ηλεκτροστατική βαφή, χωρίς
                ραφές και βίδες για πλήρη στεγανότητα.
              </li>
              <li>
                Επιλεκτικός χάλκινος υδροσκελετός (Τιτανίου-μπλε) με φύλλα
                αλουμινίου υψηλής απορροφητικότητας.
              </li>
              <li>
                Μόνωση 40 mm πετροβάμβακα στην πλάτη και 20 mm στα πλαϊνά για
                ελαχιστοποίηση θερμικών απωλειών.
              </li>
              <li>
                Πρισματικό άθραυστο κρύσταλλο securit 4mm, 90,5% διαπερατότητα.
              </li>
              <li>
                Ελαστικά EPDM και σιλικονούχα παρεμβύσματα για αντοχή έως 160
                ºC.
              </li>
              <li>
                Θερμικό υγρό προπυλενογλυκόλης με αντιδιαβρωτικά για γρήγορη
                θέρμανση και προστασία από παγετό/οξείδωση.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FinoScreen;
