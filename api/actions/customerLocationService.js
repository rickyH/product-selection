export default function customerLocationService(req) {
  /* If we have no cookies set return false straight away */
  if (!req.cookies) {
    return false;
  }

  const customerID = req.cookies.customerID;
  if (!customerID) {
    return false;
  }

  let locationID = false;
  /* Determine the location from the customerID (DB Call) */
  switch (customerID) {
    case '36893900':
      locationID = 'LIVERPOOL';
      break;
    case '26387500':
      locationID = 'LONDON';
      break;
    default:
  }

  return locationID;
}
