function Response({ data }: { data: any }) {
  return (
    <div>
      {data && data.current ? (
        <p>Temperature for {data.location.region} : {data.current.temp_c}°C</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Response;