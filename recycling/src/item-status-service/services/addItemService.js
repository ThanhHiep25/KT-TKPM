import React from "react";
import add from "../../IMG/plus.png";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AddItemService() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "100px",
      }}
    >
      <h1>Thêm sản phẩm tái chế :</h1>
      <img
        src={add}
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
        }}
        onClick={handleOpen}
        alt="them"
      />

      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflowY:"scroll",  
                  overflowX:"hidden",  
                  height:"700px"        
                }}
              >
                <h2 style={{ textAlign: "center" }}>
                  Thêm sản phẩm tái chế
                </h2>
                <form style={{ width: "100%", maxWidth: 500 }}>
                  <div style={{ marginBottom: 20 }}>
                    <label>Họ Tên:</label>
                    <input
                      style={{
                        width: "100%",
                        height: 35,
                        borderRadius: 5,
                        padding: "0 10px",
                        marginTop: 5,
                      }}
                      type="text"
                      name=""
                      placeholder="nhập tên"
                    />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label>Số điện thoại:</label>
                    <input
                      style={{
                        width: "100%",
                        height: 35,
                        borderRadius: 5,
                        padding: "0 10px",
                        marginTop: 5,
                      }}
                      type="text"
                      name=""
                      placeholder="nhập số điện thoại"
                    />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label>Tên sản phẩm:</label>
                    <input
                      style={{
                        width: "100%",
                        height: 35,
                        borderRadius: 5,
                        padding: "0 10px",
                        marginTop: 5,
                      }}
                      type="text"
                      name=""
                      placeholder="nhập tên sản phẩm"
                    />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label>Loại sản phẩm:</label>
                    <select
                      style={{
                        width: "104%",
                        height: 35,
                        borderRadius: 5,
                        padding: "0 10px",
                        marginTop: 5,
                      }}
                      name=""
                    >
                      <option value="">Samsung</option>
                      <option value="new">Iphone</option>
                      <option value="used">Laptop Asus</option>
                      <option value="used">Laptop HP</option>
                      <option value="used">Laptop Dell</option>
                      <option value="broken">Macbook</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label>Địa chỉ:</label>
                    <input
                      style={{
                        width: "100%",
                        height: 35,
                        borderRadius: 5,
                        padding: "0 10px",
                        marginTop: 5,
                      }}
                      type="text"
                      name=""
                      placeholder="nhập địa chỉ"
                    />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label>Ghi chú tình trạng thiết bị:</label>
                    <textarea
                      style={{
                        width: "100%",
                        height: "80px",
                        borderRadius: 5,
                        padding: "10px",
                        marginTop: 5,
                      }}
                      type="text"
                      name=""
                      placeholder="Nhập ghi chú"
                    />
                  </div>
                  <button
                    style={{
                      width: "104%",
                      height: 45,
                      fontSize: 20,
                      borderRadius: 5,
                      marginTop: 20,
                    }}
                    type="submit"
                  >
                    Xác nhận
                  </button>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default AddItemService;
