import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ScrollArea,
  Avatar,
  AvatarFallback,
  Separator,
} from "@aogusto/arui"

const activity = [
  { name: "Priya Nair", initials: "PN", action: "merged pull request #482" },
  { name: "Marcus Lee", initials: "ML", action: "commented on the roadmap doc" },
  { name: "Ana Souza", initials: "AS", action: "closed 3 issues in Catalog" },
  { name: "Diego Costa", initials: "DC", action: "deployed to production" },
  { name: "Priya Nair", initials: "PN", action: "opened pull request #487" },
  { name: "Marcus Lee", initials: "ML", action: "approved the design review" },
]

export default function Example() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>What your team did today.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 pr-3">
          <div className="space-y-3">
            {activity.map((entry, index) => (
              <div key={entry.name + index}>
                {index > 0 ? <Separator className="mb-3" /> : null}
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>{entry.initials}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm">
                    <span className="font-medium">{entry.name}</span>{" "}
                    <span className="text-muted-foreground">{entry.action}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
