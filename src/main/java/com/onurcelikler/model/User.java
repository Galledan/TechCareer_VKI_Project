package com.onurcelikler.model;


import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "kg_value")
    private double kgValue;
    @Column(name = "length_value")
    private double lengthValue;

    // Default Constructor
    public User() {

    }

    // Parameter Constructor
    public User(long id, String firstName, String lastName, double kgValue, double lengthValue) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.kgValue = kgValue;
        this.lengthValue = lengthValue;
    }

    // GETTER and SETTERS

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getKgValue() {
        return kgValue;
    }

    public void setKgValue(double kgValue) {
        this.kgValue = kgValue;
    }

    public double getLengthValue() {
        return lengthValue;
    }

    public void setLengthValue(double lengthValue) {
        this.lengthValue = lengthValue;
    }
}
