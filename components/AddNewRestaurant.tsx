
'use client';

import { addRestaurant } from '@api/addNewRestaurant';
import { Restaurant } from '@utils/types';
import { Button, Label, Modal, Radio, TextInput, Textarea, ToggleSwitch } from 'flowbite-react';
import { Form, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup'
import EditRestaurant from './EditRestaurant';
import { updateRestaurant } from '@api/updateRestaurant';

export default function AddNewRestaurant({ restaurant }: { restaurant?: Restaurant }) {
    const [openModal, setOpenModal] = useState(false);
    const rating = Array.from({ length: 5 }, (_, index) => index + 1);
    const router = useRouter()
    const formik = useFormik({
        enableReinitialize: true,
        validateOnMount: true,
        initialValues: {
            name: restaurant?.name ?? '',
            description: restaurant?.description ?? '',
            rating: restaurant?.rating ? String(restaurant.rating) : '',
            favourite: Boolean(restaurant?.favourite),
            latitude: restaurant?.latitude ? String(restaurant.latitude) : '',
            longitude: restaurant?.latitude ? String(restaurant.latitude) : '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            rating: Yup.string().required('Required'),
            latitude: Yup.string().required('Required'),
            longitude: Yup.string().required('Required'),
            favourite: Yup.boolean(),
        }),
        onSubmit: async (values) => {
            const submitFn = !!restaurant ? updateRestaurant : addRestaurant
            const submitRestaurant = await submitFn({
                name: values.name,
                description: values.description,
                favourite: values.favourite,
                rating: Number(values.rating),
                id: restaurant?.id ?? Math.floor(Math.random() * 1000),
                latitude: Number(values.latitude),
                longitude: Number(values.longitude),
            })
            if (submitRestaurant) router.refresh()
            formik.resetForm()
            setOpenModal(false)
        },
    })
    const handleClose = () => {
        formik.resetForm()
        setOpenModal(false)
    }
    const handleClickModal = () => setOpenModal(true)

    return (
        <>
            {restaurant ? <EditRestaurant handleClick={handleClickModal} /> : <Button onClick={handleClickModal} size="xs" gradientDuoTone="purpleToPink">Add new restaurant</Button>}
            <Modal show={openModal} onClose={handleClose}>
                <FormikProvider value={formik}>
                    <Form>
                        <Modal.Header>Add new restaurant</Modal.Header>
                        <Modal.Body>
                            <div className="flex w-full flex-col gap-3">
                                <div>
                                    <div className="mb-1 block">
                                        <Label htmlFor="name" value="Restaurant name" />
                                    </div>
                                    <TextInput id="name" type="text" sizing="sm" value={formik.values.name} onChange={formik.handleChange} />
                                </div>
                                <div>
                                    <div className="mb-1 block">
                                        <Label htmlFor="description" value="Description" />
                                    </div>
                                    <Textarea id="description" className='resize-none' rows={4} value={formik.values.description} onChange={formik.handleChange} />
                                </div>
                                <div className='mb-1 flex gap-2'>
                                    <div className=" flex gap-1 items-center">
                                        <Label htmlFor="latitude" value="Latitude" />
                                        <TextInput id="latitude" type="number" pattern='[-?\d*\.?\d+]' sizing="sm" value={formik.values.latitude} onChange={formik.handleChange} />
                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <Label htmlFor="longitude" value="Longitude" />
                                        <TextInput id="longitude" type="number" pattern='[-?\d*\.?\d+]' sizing="sm" value={formik.values.longitude} onChange={formik.handleChange} />
                                    </div>

                                </div>
                            </div>
                            <fieldset className="flex max-w-md flex-row gap-3 mt-2">
                                <legend className="mb-1">Rating</legend>
                                {rating.map(rate => {
                                    return (
                                        <div key={rate} className="flex items-center gap-2">
                                            <Radio id={`${rate}`} name="rating" value={`${rate}`} onChange={formik.handleChange} checked={formik.values.rating === `${rate}`} />
                                            <Label htmlFor={`${rate}`}>{rate}</Label>
                                        </div>
                                    )
                                })}
                            </fieldset>
                            <ToggleSwitch className='mt-5' name='favourite' checked={formik.values.favourite} label="Set as favourite" onChange={() => formik.setFieldValue('favourite', !formik.values.favourite)} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type='submit' disabled={!formik.isValid || !formik.dirty}>Submit</Button>
                        </Modal.Footer>
                    </Form>
                </FormikProvider>
            </Modal>
        </>
    );
}
