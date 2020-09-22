<template>
    <v-container style="max-width:500px">
    <v-layout>
        <v-flex xs12>
            <v-card class="elevation-12">
                <v-toolbar
                color="#FBC02D"
                dark
                flat
                >
                <v-toolbar-title>
                Sign Up
                </v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Id"
                    name="UserId"
                    prepend-icon="mdi-account"
                    v-model="UserId"
                    type="text"
                    ></v-text-field>

                    <v-text-field
                    id="UserPassword"
                    label="Password"
                    name="UserPassword"
                    v-model="UserPassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    ></v-text-field>

                    <v-text-field
                    id="UserName"
                    label="Name"
                    name="UserName"
                    v-model="UserName"
                    prepend-icon="mdi-card-account-details"
                    type="text"
                    ></v-text-field>

                    <v-text-field
                    id="UserPhone"
                    label="Phone"
                    name="UserPhone"
                    v-model="UserPhone"
                    prepend-icon="mdi-phone"
                    type="number"
                    ></v-text-field>

                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#FBC02D" @click="SignUp">Sign Up</v-btn>
                
                    </v-card-actions>
                    </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {mapActions} from 'vuex'

export default{
   data(){
       return{
           UserId :null,
           UserPassword :null,
           UserName :null,
           UserPhone :null
       }
   },
   methods:{
       ...mapActions(['NewUsers']),
       SignUp(){
        let Users={
            UserId:this.UserId,
            UserPassword:this.UserPassword,
            UserName:this.UserName,
            UserPhone:this.UserPhone
        }
        console.log(Users)
        this.NewUsers(Users)

       }
   }
}
</script>