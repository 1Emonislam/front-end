
import { Box, Modal, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Cancel from '@mui/icons-material/Cancel';
import './addModal.css';
import { useDispatch } from 'react-redux';
import { postBillingData, updateBillingData } from '../../store/actions/billingAction';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 0,
    boxShadow: 0,
    borderRadius: '8px',
    p: 4,
};
export default function BillingModal({ open, content, handleClose, page }) {
    const dispatch = useDispatch();
    const { register,
        reset,
        handleSubmit } = useForm();
    // console.log(content)
    const onSubmit = (data) => {
        if (content?._id) {
            dispatch(updateBillingData(content?._id, data, reset, handleClose, page))
        } else {
            dispatch(postBillingData(data, reset, handleClose))
        }
    };
    return (
        <div>
            <Modal
                open={open}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 style={{ margin: '0', padding: '0' }}>{content?.title}</h3>
                        <Cancel style={{ cursor: 'pointer' }} onClick={() => handleClose()} />
                    </div>
                    <br />

                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <input style={{
                            width: '90%', outline: 'none', marginBottom: "15px", border: '1px solid #ddd', borderRadius: '3px', padding: '10px', '&:focus': {
                                borderColor: 'green',
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                            },
                        }} autoComplete="off" defaultValue={content?.full_name} {...register("full_name", { min: 0 })} type="text" placeholder={"Full Name"} required />
                        <input style={{
                            width: '90%', outline: 'none', marginBottom: "15px", border: '1px solid #ddd', borderRadius: '3px', padding: '10px', '&:focus': {
                                borderColor: 'green',
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                            },
                        }} autoComplete="off" defaultValue={Number(content?.phone)}{...register("phone", { min: 0 })} placeholder="phone" min="0" type="number" required />
                        <input style={{
                            width: '90%', outline: 'none', marginBottom: "15px", border: '1px solid #ddd', borderRadius: '3px', padding: '10px', '&:focus': {
                                borderColor: 'green',
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                            },
                        }} autoComplete="off" defaultValue={content?.email} {...register("email", { min: 0 })} placeholder="Email" min="0" type="email" required />
                       { content?.action&&<select defaultValue={content?.action}{...register("action", { min: 0 })} name="SelectA" style={{
                            width: '95%', outline: 'none', marginBottom: "15px", border: '1px solid #ddd', borderRadius: '3px', padding: '10px', '&:focus': {
                                borderColor: 'green',
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                            },
                        }}>
                            <option value="active"> Active </option>
                            <option value="pending"> Pending </option>
                            <option value="block"> Block </option>
                        </select>}
                        <input style={{
                            width: '90%', outline: 'none', marginBottom: "15px", border: '1px solid #ddd', borderRadius: '3px', padding: '10px', '&:focus': {
                                borderColor: 'green',
                                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                            },
                        }} autoComplete="off" defaultValue={content?.paid_amount}{...register("paid_amount", { min: 0 })} placeholder="Amount" min="0" type="number" required />
                        <br />
                        <div>
                            <Button onClick={() => handleClose()} variant="contained" style={{ background: 'red', padding: '5px 20px', cursor: 'pointer', borderRadius: '5px', color: 'white', marginRight: '20px' }}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" style={{ background: 'green', padding: '5px 20px', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div >
    );
}
