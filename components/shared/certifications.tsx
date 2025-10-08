import Image from "next/image";

const Certifications = () => {
  return (
    <section className="w-full my-10 shadow-lg">
      <Image
        src="/images/random/certifications.png"
        alt="Certifications"
        width={1400}
        height={500}
        className="h-20 object-cover"
        priority
      />
    </section>
  );
};

export default Certifications;
