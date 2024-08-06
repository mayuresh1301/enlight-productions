import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const getReviews = async () => {
    const reviewsCollection = collection(db, 'reviews');
    const reviewSnapshot = await getDocs(reviewsCollection);
    const reviewsList = reviewSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return reviewsList;
};

export const addReview = async (name, body) => {
    const newReview = {
        name,
        body,
        createdAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'reviews'), newReview);
    return { id: docRef.id, ...newReview };
}