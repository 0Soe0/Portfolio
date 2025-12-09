type CloudProps = {
  className?: string;
  size: 'small' | 'medium' | 'big';
  amountOfBlobs: number;
};

type CloudSize = {
  container: {
    width: string;
    height: string;
  };
  largerBlob: {
    width: string;
    height: string;
  };
  smallerBlob: {
    width: string;
    height: string;
  };
}

const sizeMap: Record<'small' | 'medium' | 'big', CloudSize> = {
  small: {
    container: {width: 'clamp(100px, 30vw, 200px)', height: 'clamp(80px, 15vw, 120px)'},
    largerBlob: {width: 'clamp(30px, 10vw, 80px)', height: 'clamp(50px, 10vw, 80px)'},
    smallerBlob: {width: 'clamp(20px, 7vw, 60px)', height: 'clamp(30px, 7vw, 60px)'},
  },
  medium: {
    container: {width: 'clamp(200px, 40vw, 300px)', height: 'clamp(120px, 20vw, 160px)'},
    largerBlob: {width: 'clamp(80px, 14vw, 120px)', height: 'clamp(80px, 14vw, 120px)'},
    smallerBlob: {width: 'clamp(50px, 10vw, 80px)', height: 'clamp(50px, 10vw, 80px)'},
  },
    big: {
    container: {width: 'clamp(300px, 50vw, 400px)', height: 'clamp(160px, 25vw, 180px)'},
    largerBlob: {width: 'clamp(130px, 17vw, 160px)', height: 'clamp(130px, 17vw, 160px)'},
    smallerBlob: {width: 'clamp(80px, 13vw, 100px)', height: 'clamp(80px, 13vw, 100px)'},
  }
};

export const Cloud = ({ className = '', size, amountOfBlobs }: CloudProps) => {
  const { container, largerBlob, smallerBlob } = sizeMap[size];

  const cloudFormations = [
    // amount of blobs = 4
    { top: '9%', left: '23%', blob: largerBlob, amount: 4 },
    { top: '57%', left: '43%', blob: smallerBlob, amount: 4 },
    { top: '28%', left: '8%', blob: largerBlob, amount: 4 },
    { top: '20%', left: '54%', blob: largerBlob, amount: 4 },
    // amount of blobs = 5
    { top: '10%', left: '55%', blob: smallerBlob, amount: 5 },
    { top: '25%', left: '27%', blob: largerBlob, amount: 5 },
    { top: '35%', left: '16%', blob: smallerBlob, amount: 5 },
    { top: '30%', left: '55%', blob: largerBlob, amount: 5 },
    { top: '40%', left: '80%', blob: smallerBlob, amount: 5 },
    // amount of blobs = 7
    { top: '43%', left: '35%', blob: largerBlob, amount: 7 },
    { top: '68%', left: '48%', blob: largerBlob, amount: 7 },
    { top: '85%', left: '80%', blob: smallerBlob, amount: 7 },
    { top: '90%', left: '25%', blob: largerBlob, amount: 7 },
    { top: '95%', left: '58%', blob: largerBlob, amount: 7 },
    { top: '50%', left: '70%', blob: smallerBlob, amount: 7 },
    { top: '62%', left: '20%', blob: smallerBlob, amount: 7 },
  ]

  const cloudFormation = cloudFormations.filter(formation => formation.amount === amountOfBlobs);

  return (
    <div className={`absolute ${className}`}>
      <div className="relative"
      style={{
        width: container.width,
        height: container.height,
      }}>
        {cloudFormation.map((formation, index) => (
          <div key={index} className="absolute bg-white opacity-85 rounded-full blur-sm md:blur-md"
          style={{
            top: formation.top,
            left: formation.left,
            width: formation.blob.width,
            height: formation.blob.height,
          }}>
          </div>
        ))}
      </div>
    </div>
  );
};