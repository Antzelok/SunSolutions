import Image from "next/image";

const Certifications = () => {
  return (
    <section className="w-full my-10">
      <Image
        src="/images/random/certifications.png"
        alt="Certifications"
        width={1200}
        height={500}
        className="w-full h-20 object-cover shadow-md"
        priority
      />
    </section>
  );
};

export default Certifications;
