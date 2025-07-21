import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const XANO_BASE = "https://x8ki-letl-twmt.n7.xano.io/api:LbYA1Egg/dev_connect";

export default function PortfolioForm({ githubUser }) {
  const [formData, setFormData] = useState({
    github_user: githubUser,
    name: "",
    description: "",
    skills: "",
    contact: {
      linkedin: "",
      gmail: "",
      phone: "",
    },
  });

  const [id, setId] = useState(null);

  // Fetch existing data if available
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`${XANO_BASE}?github_user=${githubUser}`);
        const data = await res.json();
        if (data.length) {
          const profile = data[0];

          console.log(profile);
          setFormData({
            github_user: profile.github_user,
            name: profile.name || "",
            description: profile.description || "",
            skills: profile.skills.join(", "),
            contact: profile.contact || {
              linkedin: "",
              gmail: "",
              phone: "",
            },
          });
          setId(profile.id);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    }

    fetchProfile();
  }, [githubUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["linkedin", "gmail", "phone"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    try {
      const response = await fetch(id ? `${XANO_BASE}/${id}` : XANO_BASE, {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert(id ? "Profile updated!" : "Profile created!");
      if (!id && result.id) {
        setId(result.id);
      }
    } catch (error) {
      console.error("Error submitting profile:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "700px",
        margin: "auto",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 12px #111827",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {id ? "Edit Portfolio Profile" : "Create Portfolio Profile"}
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        variant="outlined"
      />

      <Grid container spacing={2} mt={2}>
        <TextField
          fullWidth
          label="LinkedIn URL"
          name="linkedin"
          value={formData.contact.linkedin}
          onChange={handleChange}
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Gmail"
          name="gmail"
          value={formData.contact.gmail}
          onChange={handleChange}
          variant="outlined"
        />

        <TextField
          id="outlined-phone"
          label="Phone"
          name="phone"
          type="tel"
          fullWidth
          required
          value={formData.contact.phone}
          autoComplete="off"
          inputProps={{
            maxLength: 10,
            minLength: 10,
            inputMode: "numeric",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          onChange={(e) => {
            const { value } = e.target;
            if (!/^\d*$/.test(value)) return;

            setFormData((prev) => ({
              ...prev,
              contact: {
                ...prev.contact,
                phone: value,
              },
            }));
          }}
        />
      </Grid>
      <TextField
        fullWidth
        label="Skills (comma separated)"
        name="skills"
        multiline
        rows={3}
        value={formData.skills}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: "20px", backgroundColor: "#7F3FBF" }}
      >
        {id ? "Update Profile" : "Create Profile"}
      </Button>
    </Box>
  );
}
