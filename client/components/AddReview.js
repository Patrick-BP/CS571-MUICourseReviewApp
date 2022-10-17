import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Rating } from "react-native-ratings";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView 
} from "react-native";


import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000/'

const AddReview = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState({
    name: "",
    rating: 0,
    comment: "",
    submitting: false,
  });
  // const [defaultRating, setdefaultRating] = useState(0);
  // const [maxRating, setmaxRatting] = useState([1,2,3,4,5]);
 


  function handlechanges(text, input) {
    setInput((prev) => ({ ...prev, [input]: text }));
  }
  let time;

  function submitFunc() {
    setInput((prev) => ({ ...prev, submitting: true }));

    time = setTimeout(() => {
      setInput((prev) => ({ ...prev, submitting: false }));
      return navigation.goBack();
    }, 1000);
  }

  function ratingCompleted(rating) {
    setInput((prev) => ({ ...prev, rating: rating }));
  }
useEffect(()=>{
  (async function fetch(){
    await axios.post(`courses/${input}/reviews`, input)
  })()
},[])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <SafeAreaView>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          style={styles.input}
          value={input.name}
          onChangeText={(text) => handlechanges(text, "name")}
        />
        <Text style={styles.rating}>Your Rating</Text>

        <Rating
          type="star"
          startingValue={0}
          ratingCount={5}
          imageSize={40}
          onFinishRating={ratingCompleted}
        />

        {/* <View style={styles.stars}>
    {
      maxRating.map((item, key)=>{
        return(
         
          <TouchableOpacity
          
          style={styles.starButton}
          key={item} onPress={()=>setdefaultRating(item)}
          >

            <Text >{item <= defaultRating ? <FontAwesome name="star" size={24} color="yellow" />: <FontAwesome name="star-o" size={24} color="black" />}</Text>

          </TouchableOpacity>
        )
      })
    }

  </View> */}

        <TextInput
          style={styles.commentInput}
          multiline={true}
          numberOfLines={7}
          value={input.comment}
          onChangeText={(text) => handlechanges(text, "comment")}
        />

        {input.submitting && <ActivityIndicator />}
        <TouchableOpacity style={styles.submitButton} onPress={submitFunc}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  commentInput: {
    padding: 2,
    marginTop: 30,
    marginBottom: 30,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 20,
  },
  stars: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default AddReview;
