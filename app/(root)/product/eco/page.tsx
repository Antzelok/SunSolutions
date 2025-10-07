import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Eco",
};

const EcoPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* LEFT SIDE - Images in ShadCN Cards */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/card/eco.png"
                  alt="Eco Product"
                  width={600}
                  height={400}
                  className="rounded-2xl object-contain"
                  priority
                />
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images/eco/EcoMod.png"
                  alt="Eco Solar Heater"
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
                Ηλιακός Θερμοσίφωνας ΗΛΙΟΘΕΡΜΟ ECO
              </h1>
              <p className="text-black">
                Οι γνωστοί ηλιακοί θερμοσίφωνες “Ηλιόθερμο ECO”, από το 1974,
                βρίσκονται στην κορυφή των προτιμήσεων στα ηλιακά συστήματα
                θέρμανσης ζεστού νερού χρήσης. Διατίθενται σε 80, 100, 125, 150
                και 200 λίτρα, διπλής ή τριπλής ενέργειας.
              </p>
              <p className="text-black">
                Οι ηλιακοί θερμοσίφωνες “Ηλιόθερμο ECO” κατασκευάζονται με τις
                πιο αυστηρές προδιαγραφές ποιότητας και απόδοσης.
              </p>
            </div>

            {/* Advantages */}
            <div className="space-y-4">
              <h2 className="text-orange-400 font-semibold text-lg">
                Πλεονεκτήματα
              </h2>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  Το μόνο με ηλεκτρονικό θερμόμετρο (προαιρετικό) — παρέχει
                  ΕΛΕΓΧΟ της λειτουργίας.
                </li>
                <li>Οικονομία νερού — άμεση ζεστασιά χωρίς αναμονή.</li>
                <li>
                  Οικονομία ρεύματος — ξέρετε πότε να ενεργοποιήσετε την
                  ηλεκτρική αντίσταση.
                </li>
                <li>Ασφάλεια — δείχνει τυχόν υπερθέρμανση.</li>
              </ul>
            </div>

            {/* Technical Specs */}
            <div className="space-y-4">
              <h2 className="text-orange-400 font-semibold text-lg">
                Τεχνικά Χαρακτηριστικά
              </h2>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  Boiler από ευρωπαϊκό χαλυβδοέλασμα για μεγάλη διάρκεια ζωής.
                </li>
                <li>Πιστοποιημένο δοχείο σε πίεση 20 bar.</li>
                <li>Εσωτερική προστασία από εμαγιέ για σκληρά νερά.</li>
                <li>
                  Επαναστατικός εναλλάκτης κλειστού κυκλώματος για γρήγορη
                  θέρμανση.
                </li>
                <li>
                  Ισχυρή μόνωση χυτής οικολογικής πολυουρεθάνης 5 εκ.,
                  πυκνότητας 50kg/m³.
                </li>
                <li>Ράβδος μαγνησίου για προστασία κατά ηλεκτρόλυσης.</li>
                <li>
                  Ηλεκτρική αντίσταση με θερμοστάτη για ζεστό νερό ακόμη και με
                  συννεφιά.
                </li>
                <li>
                  Πλαίσιο συλλέκτη από προφίλ αλουμινίου με προστασία από
                  ηλεκτροστατική βαφή.
                </li>
                <li>
                  Απορροφητής από χάλκινο υδροσκελετό συγκολλημένο με laser σε
                  επιλεκτική επιφάνεια αλουμινίου.
                </li>
                <li>Ο μόνος πιστοποιημένος συλλέκτης σε αντοχή 22,5 bar.</li>
                <li>Υψηλή απόδοση λόγω ισχυρής μόνωσης πετροβάμβακα.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EcoPage;
