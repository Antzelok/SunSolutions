"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EurostarPage = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full mx-auto">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE - IMAGE */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <Image
              src="/images/card/eurostar.png"
              alt="Eurostar Product Card"
              width={600}
              height={600}
              className="rounded-2xl shadow-md object-contain"
              priority
            />
            <Image
              src="/images/eurostar/eurostarMod.png"
              alt="Eurostar Solar Heater"
              width={600}
              height={600}
              className="rounded-2xl shadow-lg object-contain"
              priority
            />
          </div>

          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="flex flex-col space-y-10">
            {/* TITLE */}
            <Card>
              <CardHeader>
                <h1 className="text-orange-400 font-semibold text-2xl">
                  Ηλιακοί Θερμοσίφωνες Κανονικού Ύψους
                </h1>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-black space-y-3">
                  <li>
                    Ο ηλιακός θερμοσίφωνας EUROSTAR έχει σχεδιαστεί και
                    κατασκευαστεί για υψηλή απόδοση και διάρκεια ζωής.
                  </li>
                  <li>
                    Ο νέος χάλκινος επιλεκτικός συλλέκτης τιτανίου προσφέρει
                    καυτό νερό ακόμη και σε δύσκολες καιρικές συνθήκες.
                  </li>
                  <li>
                    Κατασκευασμένος σύμφωνα με ISO 9001-2015 & πιστοποιημένος
                    κατά ΕΝ 12975-1-2.
                  </li>
                  <li>Διαθέτει το Ευρωπαϊκό σήμα ποιότητας Solar Keymark.</li>
                </ul>
              </CardContent>
            </Card>

            {/* ΠΛΕΟΝΕΚΤΗΜΑΤΑ */}
            <Card>
              <CardHeader>
                <h2 className="text-orange-400 font-semibold text-xl">
                  Πλεονεκτήματα
                </h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="min-w-[500px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Πλεονεκτήματα</TableHead>
                        <TableHead>Περιγραφή</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">
                          Εύκολη Εγκατάσταση
                        </TableCell>
                        <TableCell>
                          Τοποθέτηση χωρίς τρυπήματα στα κεραμίδια.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">
                          Ρυθμιζόμενη Κλίση
                        </TableCell>
                        <TableCell>
                          18°–22°–35°–40° για μέγιστη απόδοση.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Συμβατότητα</TableCell>
                        <TableCell>Συνδέεται και με καλοριφέρ.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* ΤΕΧΝΙΚΑ ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ BOILER */}
            <Card>
              <CardHeader>
                <h2 className="text-orange-400 font-semibold text-xl">
                  Τεχνικά Χαρακτηριστικά Boiler
                </h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="min-w-[500px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Στοιχείο</TableHead>
                        <TableHead>Περιγραφή</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Υλικό</TableCell>
                        <TableCell>
                          Χάλκινος υδροσκελετός υψηλής απόδοσης.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Μόνωση</TableCell>
                        <TableCell>Πετροβάμβακας 40mm (50kg/m³).</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Κρύσταλλο</TableCell>
                        <TableCell>
                          Πρισματικό securit 4mm, διαπερατότητα 90.5%.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">
                          Θερμικό Υγρό
                        </TableCell>
                        <TableCell>
                          Προπυλενογλυκόλη με αντιδιαβρωτικά πρόσθετα.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* ΤΕΧΝΙΚΑ ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ ΣΥΛΛΕΚΤΗ */}
            <Card>
              <CardHeader>
                <h2 className="text-orange-400 font-semibold text-xl">
                  Τεχνικά Χαρακτηριστικά Ηλιακού Συλλέκτη
                </h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="min-w-[500px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Στοιχείο</TableHead>
                        <TableHead>Περιγραφή</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">Πλαίσιο</TableCell>
                        <TableCell>
                          Αλουμίνιο βαμμένο ηλεκτροστατικά χωρίς ραφές.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Απορροφητής</TableCell>
                        <TableCell>
                          Επιλεκτικός χάλκινος υδροσκελετός τιτανίου.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Μόνωση</TableCell>
                        <TableCell>
                          Πετροβάμβακας 40mm, περιορίζει απώλειες.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Κρύσταλλο</TableCell>
                        <TableCell>
                          Securit 4mm, διαπερατότητα 90.5%, ανθεκτικό έως 700°C.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EurostarPage;
