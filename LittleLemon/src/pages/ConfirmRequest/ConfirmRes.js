import { useEffect, useContext } from "react";
import Swal from "sweetalert2";
import AppContext from "../../AppContext";
import "./ConfirmRes.css"; 

const ConfirmRes = ({ conf }) => {
  const { setConfirm, setMsg } = useContext(AppContext);

  useEffect(() => {
    Swal.fire({
      title: 'Booking Confirmed',
      html: `
        <strong>${conf.line1}</strong><br/>
        ${conf.line2}<br/>
        ${conf.line3}
      `,
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swal2-confirm',
      }
    }).then(() => {
      setConfirm(false);
      setMsg({
        line1: "",
        line2: "",
        line3: "",
      });
    });
  }, [conf, setConfirm, setMsg]);

  return null;
};

export default ConfirmRes;
