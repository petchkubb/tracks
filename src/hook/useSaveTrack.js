import {useContext} from 'react';
import {Context as TrackContext} from '../context/TrackContext';
import {Context as LocationContext} from '../context/LocationContext';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  const {createTrack} = useContext(TrackContext);
  const {
    state: {locations, name},
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.goBack();
  };

  return [saveTrack];
};
