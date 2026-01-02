import IssueForm from "@/app/components/IssueForm"
import { getCurrentUser, getIssue } from "@/lib/dal"
import { redirect } from "next/navigation"

const EditIssue = async ( { id }: { id: string}) => {
  const issue = await getIssue(+id)

  const user = await getCurrentUser()
  if(!user){
    redirect("/signin")
  }
  return <IssueForm userId={user.id} isEditing issue={issue}  />
}

export default EditIssue
