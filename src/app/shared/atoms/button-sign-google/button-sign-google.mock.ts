
import { UserCredential } from "../../../core/models/user.interface";
import Swal from "sweetalert2";
import { AlertIcon } from "../../util/services/alert.models";


export class AuthServiceMock {

    loginWithGoogle():Promise<UserCredential>{
        return new Promise ((reject)=>{
            const userCreditial: UserCredential = {
                "user": {
                    "uid": "1trSYnDhcoPGY0kDaXpZLVZcw443",
                    "email": "vianchajohan@gmail.com",
                    "emailVerified": true,
                    "displayName": "Johan Viancha",
                    "isAnonymous": false,
                    "photoURL": "https://lh3.googleusercontent.com/a/ALm5wu0ULgOqvfg3u2dQmiPPNiwj0JLT3c3GDWns-Nuijg=s96-c",
                    "providerData": [
                        {
                            "providerId": "google.com",
                            "uid": "117116417845215304903",
                            "displayName": "Johan Viancha",
                            "email": "vianchajohan@gmail.com",
                            "phoneNumber": null,
                            "photoURL": "https://lh3.googleusercontent.com/a/ALm5wu0ULgOqvfg3u2dQmiPPNiwj0JLT3c3GDWns-Nuijg=s96-c"
                        }
                    ],
                    "stsTokenManager": {
                        "refreshToken": "AOEOulYse6zzo8oyNLz22OQ_esuYsXCRzOyL6ousiDi_tYRf6a97-hoylJI3aMz89B0h7wKqIG7aG0bg_rhvb27hD1LyOo1oV9l2m08X6b_xyEg95ik-cxWgakn9gH-qdmBHIw2zPyvXwVrmTN_m5RXHpHSxNC869Ho70tI5oVmdkcaqVrqEB72PCwyVO0MK-StU1iCQcSv5z9dr4gV0pGI0oa-ARVfZ_uxu8wLIQrq3_aKLqdjmDre1H1__aB5-ninypuZdKIfGQ4NzjL7IOn-k0uGFIu9jn7BxlFdYjpM-GZJpF5eeNCcMM5uFEg6VSXnom-DmovDXDiK32B5jenwDouNuh4h4IgXbyY_2RbSxOwUxESnHKvYhCZNNr9F_Szn_JGUdHzGcwbi-wpI6ZkNWun3tIac9icgXqgA1VTCijZQOKhbrTqA",
                        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5NjJmMDRmZWVkOTU0NWNlMjEzNGFiNTRjZWVmNTgxYWYyNGJhZmYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSm9oYW4gVmlhbmNoYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3UwVUxnT3F2ZmczdTJkUW1pUFBOaXdqMEpMVDNjM0dEV25zLU51aWpnPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3JlZC1jb2RlLTEwMSIsImF1ZCI6InJlZC1jb2RlLTEwMSIsImF1dGhfdGltZSI6MTY2NTQ5NzMyNiwidXNlcl9pZCI6IjF0clNZbkRoY29QR1kwa0RhWHBaTFZaY3c0NDMiLCJzdWIiOiIxdHJTWW5EaGNvUEdZMGtEYVhwWkxWWmN3NDQzIiwiaWF0IjoxNjY1NDk3MzI2LCJleHAiOjE2NjU1MDA5MjYsImVtYWlsIjoidmlhbmNoYWpvaGFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE3MTE2NDE3ODQ1MjE1MzA0OTAzIl0sImVtYWlsIjpbInZpYW5jaGFqb2hhbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.cwjv9HjEF7_9lBi_D8A9hB38n-JBm6QeDTLHLxiyS2byzlwApbZ3UXcj9LP1h-9LzHB9ZOJDHITO4RyvQDwEXBCQR5hJJRM8VJ4Ck5dYFEI0vxbpq288JpBRpJRLJivu8e5n05ovgQoauoHMmfEInJ7d0Vkwzu1HFP8jmvTjh9JbClKMHbFiHoYE5JwWy65eXhxkPtUm_5wOKGnfg88spN5bzk58XGyMyyp9YnnCX9vOSJ_ZQhnjJzU5cI5ufS75tdSJsARWzNbzJRHmt283_1VIBn-wIlp3e84SvIC3Hm89UG_91b9L00XSfiEmNiW8dMwdGZl24YufNA8gVp4Ghw",
                        "expirationTime": 1665500925955
                    },
                    "createdAt": "1665251672615",
                    "lastLoginAt": "1665497311034",
                    "apiKey": "AIzaSyA_fquVbD0Kwyg_a07rILMHbKpVpJ7aVwU",
                    "appName": "[DEFAULT]"
                },
                "providerId": "google.com",
                "_tokenResponse": {
                    "federatedId": "https://accounts.google.com/117116417845215304903",
                    "providerId": "google.com",
                    "email": "vianchajohan@gmail.com",
                    "emailVerified": true,
                    "firstName": "Johan",
                    "fullName": "Johan Viancha",
                    "lastName": "Viancha",
                    "photoUrl": "https://lh3.googleusercontent.com/a/ALm5wu0ULgOqvfg3u2dQmiPPNiwj0JLT3c3GDWns-Nuijg=s96-c",
                    "localId": "1trSYnDhcoPGY0kDaXpZLVZcw443",
                    "displayName": "Johan Viancha",
                    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5NjJmMDRmZWVkOTU0NWNlMjEzNGFiNTRjZWVmNTgxYWYyNGJhZmYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSm9oYW4gVmlhbmNoYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BTG01d3UwVUxnT3F2ZmczdTJkUW1pUFBOaXdqMEpMVDNjM0dEV25zLU51aWpnPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3JlZC1jb2RlLTEwMSIsImF1ZCI6InJlZC1jb2RlLTEwMSIsImF1dGhfdGltZSI6MTY2NTQ5NzMyNiwidXNlcl9pZCI6IjF0clNZbkRoY29QR1kwa0RhWHBaTFZaY3c0NDMiLCJzdWIiOiIxdHJTWW5EaGNvUEdZMGtEYVhwWkxWWmN3NDQzIiwiaWF0IjoxNjY1NDk3MzI2LCJleHAiOjE2NjU1MDA5MjYsImVtYWlsIjoidmlhbmNoYWpvaGFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE3MTE2NDE3ODQ1MjE1MzA0OTAzIl0sImVtYWlsIjpbInZpYW5jaGFqb2hhbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.cwjv9HjEF7_9lBi_D8A9hB38n-JBm6QeDTLHLxiyS2byzlwApbZ3UXcj9LP1h-9LzHB9ZOJDHITO4RyvQDwEXBCQR5hJJRM8VJ4Ck5dYFEI0vxbpq288JpBRpJRLJivu8e5n05ovgQoauoHMmfEInJ7d0Vkwzu1HFP8jmvTjh9JbClKMHbFiHoYE5JwWy65eXhxkPtUm_5wOKGnfg88spN5bzk58XGyMyyp9YnnCX9vOSJ_ZQhnjJzU5cI5ufS75tdSJsARWzNbzJRHmt283_1VIBn-wIlp3e84SvIC3Hm89UG_91b9L00XSfiEmNiW8dMwdGZl24YufNA8gVp4Ghw",
                    "context": "",
                    "oauthAccessToken": "ya29.a0Aa4xrXNeNeri9YivrjdgTCzBve7r_suOA670-EU0Pb-sGHM10l0-tcP0qrDO6992tjaILab22oA0TXalJpRaBRK11T_hK6MXDys9ooJNlKpOLWWz4NMfahCkTrosFETEYCz7ONFu2_6avNznhqX6PFKJPv0fygaCgYKATASARMSFQEjDvL91H2GOcxcGuNVhlqdOthxbw0165",
                    "oauthExpireIn": 3599,
                    "refreshToken": "AOEOulYse6zzo8oyNLz22OQ_esuYsXCRzOyL6ousiDi_tYRf6a97-hoylJI3aMz89B0h7wKqIG7aG0bg_rhvb27hD1LyOo1oV9l2m08X6b_xyEg95ik-cxWgakn9gH-qdmBHIw2zPyvXwVrmTN_m5RXHpHSxNC869Ho70tI5oVmdkcaqVrqEB72PCwyVO0MK-StU1iCQcSv5z9dr4gV0pGI0oa-ARVfZ_uxu8wLIQrq3_aKLqdjmDre1H1__aB5-ninypuZdKIfGQ4NzjL7IOn-k0uGFIu9jn7BxlFdYjpM-GZJpF5eeNCcMM5uFEg6VSXnom-DmovDXDiK32B5jenwDouNuh4h4IgXbyY_2RbSxOwUxESnHKvYhCZNNr9F_Szn_JGUdHzGcwbi-wpI6ZkNWun3tIac9icgXqgA1VTCijZQOKhbrTqA",
                    "expiresIn": "3600",
                    "oauthIdToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NTEwNGEzN2ZhOTAzZWQ4MGM1NzE0NWVjOWU4M2VkYjI5YjBjNDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzE4MjIxNTM2MDQyLTUzMGlmZ3NqMm9kM2VtaGwxczZxYjgzc29uNWxrNmR2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzE4MjIxNTM2MDQyLTUzMGlmZ3NqMm9kM2VtaGwxczZxYjgzc29uNWxrNmR2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3MTE2NDE3ODQ1MjE1MzA0OTAzIiwiZW1haWwiOiJ2aWFuY2hham9oYW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJpOFZyMXpsUFgtTENXeE1RdDNpWUFRIiwiaWF0IjoxNjY1NDk3MzI2LCJleHAiOjE2NjU1MDA5MjZ9.RuaThJxT_swUbcutej5jVplSGRz4PcNVhwtnK-Q6ymd_40kT01D9d-h8OK9HeT3qSc2bPPvPoRLotrbyB3zIAPRBtKKkDaRRuoj043Pe2_cOhUOKWX_nghdUz4J8huALjCdBMFmXKw_myzVKZdo8e442lG3TbK6HosIaVqszPknAUIuQxJ1zNNV7aOLZbqQraxZAQ4nOlKxr90a3OmUWNZvwFOUIOFX2wijdEJoz0oO_dTNsXYzfKH-PBZ4wmweejpotPGjn-iBsFzEBH_nuLqiXRoERvwGVjDV8Q0adwzNMexPHNYNG3tOcgTuM9Qa2iTQnYvCzik1vM8GSTQFwdw",
                    "rawUserInfo": "{\"name\":\"Johan Viancha\",\"granted_scopes\":\"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid\",\"id\":\"117116417845215304903\",\"verified_email\":true,\"given_name\":\"Johan\",\"locale\":\"es\",\"family_name\":\"Viancha\",\"email\":\"vianchajohan@gmail.com\",\"picture\":\"https://lh3.googleusercontent.com/a/ALm5wu0ULgOqvfg3u2dQmiPPNiwj0JLT3c3GDWns-Nuijg=s96-c\"}",
                    "kind": "identitytoolkit#VerifyAssertionResponse"
                },
                "operationType": "signIn"
            }
                
            reject(userCreditial);
    
        })
    }
         
}

export  const _authtService = {
    
}

export const _alertService = {
    openAlert: ()=>{
        Swal.fire({
            title: 'Inicio de sesión',
            text: 'Usuario logeado con exito',
            icon: AlertIcon.success,
          })
    }
}