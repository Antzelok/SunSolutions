import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle, FaGithub, FaTiktok } from "react-icons/fa";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Footer = () => {
  return (
    <footer className=" text-black">
      {/* Social Icons */}
      <div className="text-center py-6 border-t border-gray-950">
        <div className="flex justify-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-blue-500 hover:scale-125 transition-transform duration-200"
          >
            <FaFacebook size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-red-500 hover:scale-125 transition-transform duration-200"
          >
            <FaGoogle size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-pink-500 hover:scale-125 transition-transform duration-200"
          >
            <FaTiktok size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-gray-400 hover:scale-125 transition-transform duration-200"
          >
            <FaGithub size={24} />
          </Button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 py-8 border-t border-gray-900">
        {/* Logo + Description */}
        <Card className="shadow-none border-none">
          <CardHeader>
            <h5 className="text-xl  hover:text-orange-400 transition-colors">
              Sun Solutions Co.
            </h5>
          </CardHeader>
          <CardContent>
            <p className="max-w-md hover:text-orange-400 transition-colors">
              Φυσική ενέργεια, φυσική επιλογή. Ηλιακοί θερμοσίφωνες με υπογραφή
              ποιότητας.
            </p>
          </CardContent>
        </Card>

        {/* Products + Contact */}
        <div className="grid grid-cols-2 gap-8">
          {/* Products */}
          <Card className="shadow-none border-none">
            <CardHeader>
              <h5 className="text-lg font-mono hover:text-orange-400 transition-colors">
                ΠΡΟΙΟΝΤΑ
              </h5>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Link
                        href="/eurostar"
                        className="hover:text-orange-400 underline"
                      >
                        Eurostar
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link
                        href="/fino"
                        className="hover:text-orange-400 underline"
                      >
                        Fino
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link
                        href="/eco"
                        className="hover:text-orange-400 underline"
                      >
                        Eco
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-none border-none">
            <CardHeader>
              <h5 className="text-lg hover:text-orange-400 transition-colors">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </h5>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="hover:text-orange-400">
                      📍 Athens, Fedriadon 120, 113 64
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link
                        href="mailto:info@sunsolutions.gr"
                        className="hover:text-orange-400"
                      >
                        ✉️ info@sunsolutions.gr
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Link
                        href="tel:+306932462414"
                        className="hover:text-orange-400"
                      >
                        📞 +30 693 246 2414
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="flex flex-col md:flex-row justify-center items-center text-sm border-t border-gray-900 p-2 space-y-1 md:space-y-0 md:space-x-4">
        <p className="hover:text-orange-400 transition-colors">
          &copy; 2025 Copyrights
        </p>
        <Link href="/terms&conditions">
          <span className="underline hover:text-orange-400 transition-colors">
            Terms and Conditions
          </span>
        </Link>
        <Link href="/cookiepolicy">
          <span className="underline hover:text-orange-400 transition-colors">
            Cookie Policy
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
