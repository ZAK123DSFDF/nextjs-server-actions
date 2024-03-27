export default function ServerId({ params, searchParams }: any) {
  return (
    <>
      <div>clientId:{params.id}</div>
      <div>clientsearchId:{searchParams.new}</div>
    </>
  );
}
