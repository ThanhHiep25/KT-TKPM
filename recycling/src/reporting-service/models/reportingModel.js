import React, { useEffect, useState } from "react";
import "../Css/report.css";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReportingModel() {
  const [state, setState] = useState(null);
  const [openDel, setOpenDel] = useState(null);
  const fetchApiReport = () => {
    fetch("http://localhost:3007/reporting")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 20,
    borderRadius: 5,
    p: 4,
  };

  useEffect(() => {
    // code
    fetchApiReport();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);

  const handleDelete = (id) => {
    fetch(`http://localhost:3007/deletereporting/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update devices state after successful deletion
        setState(state.filter((state) => state.id !== id));
        toast.success("Xóa phản hồi thành công !!");
        fetchApiReport();
        handleCloseDel();
      })
      .catch((error) => {
        console.error("Error deleting device:", error);
        toast.error("Không thể xóa");
      });
  };

  return (
    <div
      style={{
        marginLeft: "100px",
      }}
    >
      <ToastContainer />
      <h1>Thông tin phản hồi :</h1>
      {state &&
        state.map((item) => (
          <div className="container-report">
            <MarkChatReadIcon
              fontSize="large"
              color="primary"
              style={{
                cursor: "pointer",
              }}
              onClick={handleOpen}
            />
            <p className="p-report">{item.id}</p>
            <p className="p-report">{item.nameSP}</p>
            <p className="p-report">{item.loaiSP}</p>
            <DeleteIcon
              fontSize="large"
              color="disabled"
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleOpenDel()}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div>
                  <h3>Thông tin phản hồi đến khách hàng.</h3>
                  <p>Họ tên : {item.name}</p>
                  <p>ID thiết bị : {item.id}</p>
                  <p>Email : {item.email}</p>
                  <p>Số điện thoại : {item.std}</p>
                  <p>Sản phẩm : {item.nameSP}</p>
                  <p>Loại thiết bị : {item.loaiSP}</p>
                  <p>Ngày nhận yêu cầu : {item.date}</p>
                  <p>Ngày gửi phản hồi : {item.dateG}</p>
                  <p>Tình trạng thiết bị : {item.tinhTrang}</p>
                  <p>Chi phí được trả cho thiết bị : {item.gia} VND</p>
                  <p style={{ color: "red" }}>
                    * Lưu ý nếu không đồng ý với mức giá của chúng tôi đưa ra
                    thì bạn có thể xóa hoặc hủy bỏ phản hồi này !
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button color="secondary" onClick={() => handleClose()}>
                      Đóng phản hồi
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        try {
                          fetch("http://localhost:3007/addaccounting", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              id: item.id,
                              nameUser: item.name,
                              nameSP: item.nameSP,
                              loaiSP: item.loaiSP,
                              std: item.std,
                              name: item.name,
                              date: item.date,
                              dateG: item.dateG,
                              tinhTrang: item.tinhTrang,
                              amount: item.gia,
                            }),
                          });
                          toast.success(`Thành công ${item.nameSP}`);
                        } catch (error) {
                          toast.error("Không thể thực hiện")
                        }
                      }}
                    >
                      Đồng ý
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
            <Modal
              open={openDel}
              onClose={handleCloseDel}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3>Bạn có chắc muốn xóa không ?</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "50px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleCloseDel()}
                    >
                      Hủy
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleDelete();
                      }}
                    >
                      Xác nhận
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        ))}
    </div>
  );
}

export default ReportingModel;
