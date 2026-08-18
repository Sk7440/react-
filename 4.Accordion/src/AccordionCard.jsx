export function AccordionCard({ info, indexS, idx }) {
  console.log(info);

  return (
    <>
      <h3 class="accordion-header">
        <span class="icon">🎨 {info.heading} {indexS == idx ? 'up' : 'down'}  </span>
      </h3>

      {
        indexS == idx && (
            <p>{info.paragraph}</p>
        )
      }
    </>
  );
}
